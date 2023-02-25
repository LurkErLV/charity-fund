import Header from "../components/Support/Header";
import Transfers from "../components/Support/Transfers";

function Support(props) {
    return (
        <div className="App">
            <Header lang={props.lang}/>
            <Transfers lang={props.lang} />
        </div>
    );
}

export default Support;