import FeelingsList from './FeelingsList'
//importing a Child Component


//Here is our function which is also a component, it is the parent component
function Garfield(props) {
    const image = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/19/16/garfield-4-0.jpg"

    //Return our JSX, including the FeelingsList Component
    return (
        <div className="theImage">
            <h1 className="name">Garfield's Life</h1>
            {/* Embed our image */}
            <img src ={image} alt="Garfield Comic" />
            <h3>How does he feel?</h3>
            {}
            <FeelingsList feelings={props.feelings} />
        </div>
    );
}
//Export our component
export default Garfield
import '../Garfield.css'