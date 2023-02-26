import Header from '../components/Request/Header';
import Form from "../components/Request/Form";

function Request(props) {
    return (
        <div className="App">
            <Header lang={props.lang} />
            <Form lang={props.lang} />
        </div>
    );
}

export default Request;