import { Link } from "react-router-dom";

export function Help() {
  return <div className="py-10 offwhite sm:px-6 md:px-10">
    <div className="container space-y-6">
  <h1 className="text-5xl sm:text-3xl text-center font-bold">Frequently Asked Questions</h1>
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
      <div className="border-2 shadow rounded p-3  border-green-950">
       <p>
        <strong className="text-lg">Question : </strong> <span className="text-green-950">Do i need to login to create and event?</span>
        </p> 
        <p> <strong className="text-lg">Answer : </strong> </p>
        <p> <strong>YES! </strong> In order to create an event you must <Link to={'/signup'} className="text-blue-500">Resister </Link>
         a new account or <Link to={'/login'} className="text-blue-500">Login</Link> to an existing account.
         </p>
      </div>

      <div className="border-2 shadow rounded p-3  border-green-950">
       <p>
        <strong className="text-lg">Question : </strong> <span className="text-green-950">Do i need to login to RSVP for event?</span>
        </p> 
        <p> <strong className="text-lg">Answer : </strong> </p>
        <p> <strong>NO! </strong> You are not required to register or login before RSVPing for an event. But to view all events you have RSVPd to,  you must be registered and logged in.
         </p>
      </div>

      <div className="border-2 shadow rounded p-3  border-green-950">
       <p>
        <strong className="text-lg">Question : </strong> <span className="text-green-950">Lorem ipsum dolor sit adipisicing?</span>
        </p> 
        <p> <strong className="text-lg">Answer : </strong> </p>
         <p> <strong>Lorem ipsum </strong> dolor, sit amet consectetur adipisicing elit.
         Blanditiis, <Link to={'/rsvp/1'} className="text-blue-500">RSVP</Link> Velit, 
         sit eius iusto <Link to={'/create-event'} className="text-blue-500">Create Event</Link> laboriosam expedita dolorum illum deleniti!
          
          </p>
    
      </div>



    </div>






    </div>
    </div>;
}
