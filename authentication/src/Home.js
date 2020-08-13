import React from 'react';
import fire from './config/firebase';
import { Button } from 'reactstrap';

class Home extends React.Component{
logout(){

    fire.auth().signOut();
}
    render(){
        return(
            <div>

                <h1>
                    You Are logged in 
                </h1>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}

export default Home;

 