export default function AboutMe() {
    return (
        <div>
            <h1 className="title">about me!</h1>
            <div className="intro">
                <p>
                    my name is keya! i'm currently a computer engineering student at the University of Waterloo in Canada.<br />
                    <br/>
                    some things i love:<br />
                    - cooking (clearly)<br />
                    - dancing<br />
                    - my lovely teddy bear, Smelly<br />
                    - hanging out with my friends<br />
                    - learning new things<br />
                    <br/>
                    some things i don't love as much:<br />
                    - snakes<br />
                    - cutting onions (i invested in a chopper)<br />
                    - coconut and bananas<br />
                </p>
            </div>
            <div className="col img">
                <img src="/images/smelly.jpg" alt="" />
            </div>
        </div>
    );
}
