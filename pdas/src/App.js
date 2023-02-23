import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistant</p>
                </div>
            </section>
    
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage} 
                                description="Alexa was made by Amazon."/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="Cortana was made by Microsoft." />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri was made by Apple." />    
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );    
}
export default App;