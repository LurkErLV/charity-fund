import Header from "../components/Main/Header";
import Category from "../components/Main/Category";
import Reports from "../components/Main/Reports";
import FAQ from "../components/Main/FAQ";
import Contacts from "../components/Main/Contacts";

function Main(props) {
    return (
        <div className="App">
            <Header lang={props.lang}/>
            <Category lang={props.lang}/>
            <Reports lang={props.lang}/>
            <FAQ lang={props.lang} />
            <Contacts lang={props.lang} />
        </div>
    );
}

export default Main;