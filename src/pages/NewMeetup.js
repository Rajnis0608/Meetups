import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){

    const navigate = useNavigate();
    const nev = event => navigate('/', { replace: true });

    

    function onAddMeetupHandler(meetupData){
        fetch('https://react-meetups-bcf6f-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(() => {
            nev();
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup = {onAddMeetupHandler}/>
    </section>;
}

export default NewMeetupsPage;