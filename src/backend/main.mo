import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";

actor {
  type ServiceType = {
    #bondCleaning;
    #carpetCleaning;
    #pestControl;
    #windowCleaning;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    address : Text;
    serviceType : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = Map.empty<Nat, ContactSubmission>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, address : Text, serviceType : ServiceType, message : Text) : async () {
    let submission : ContactSubmission = {
      id = nextId;
      name;
      phone;
      email;
      address;
      serviceType;
      message;
      timestamp = Time.now();
    };

    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions(adminPrincipal : Principal) : async [ContactSubmission] {
    if (adminPrincipal.toText() != "2vxsx-fae") {
      Runtime.trap("Unauthorized access. Only admin can view submissions");
    };
    submissions.values().toArray();
  };
};
