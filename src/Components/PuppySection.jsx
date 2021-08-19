import '../CSS/puppy.css'
import '../CSS/responsive.css'
import { Link } from 'react-router-dom'

const PuppySection = () => {
    return (
        <div>
            <section className="background firstSection">
                <div className="box_main">
                    <div className="firstHalf">
                        <p className="text_big">Having respect for animals makes us better humans</p>
                        <p className="text_small">No one appreciates the very special genius of your conversation as much as the dog
                            does</p>
                        <div className="buttons">
                            <Link to="/"><button className="btn btn_res">Login</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div>
                    <p className="p_text_big">Saving one dog will not change the world, but surely for that one dog, the world will
                        change forever</p>
                    <p className="p_text_small">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste dolor dolores, nulla animi
                        quo aut autem voluptatibus mollitia dolorem aspernatur. Repellendus, nostrum. Fugiat molestias iusto
                        explicabo aliquam ex sed ipsam labore, ut repellat eveniet placeat aliquid unde, iure in. Architecto hic
                        doloremque ullam distinctio fugiat non beatae aut laboriosam reprehenderit consequuntur, magni
                        voluptatum neque alias qui modi dolore nihil sint repellat tempora provident iste adipisci corrupti.
                        Perspiciatis omnis similique expedita facere accusamus necessitatibus ipsam aliquid odit? Illum soluta
                        nihil nemo sapiente quas quaerat porro praesentium vitae molestias, earum dolore, iste assumenda
                        delectus cumque temporibus mollitia consectetur laboriosam! Illum, facilis.
                    </p>
                </div>
                <div><img src="images/sec1.jpg" alt="book-image" className="sec-img" /></div>
            </section>
            <section className="section sec2">
                <div>
                    <p className="p_text_big">Saving one dog will not change the world, but surely for that one dog, the world will
                        change forever</p>
                    <p className="p_text_small">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste dolor dolores, nulla animi
                        quo aut autem voluptatibus mollitia dolorem aspernatur. Repellendus, nostrum. Fugiat molestias iusto
                        explicabo aliquam ex sed ipsam labore, ut repellat eveniet placeat aliquid unde, iure in. Architecto hic
                        doloremque ullam distinctio fugiat non beatae aut laboriosam reprehenderit consequuntur, magni
                        voluptatum neque alias qui modi dolore nihil sint repellat tempora provident iste adipisci corrupti.
                        Perspiciatis omnis similique expedita facere accusamus necessitatibus ipsam aliquid odit? Illum soluta
                        nihil nemo sapiente quas quaerat porro praesentium vitae molestias, earum dolore, iste assumenda
                        delectus cumque temporibus mollitia consectetur laboriosam! Illum, facilis.
                    </p>
                </div>
                <div><img src="images/sec2.jpg" alt="book-image" className="sec-img sec-img2" /></div>
            </section>
            <section className="section">
                <div>
                    <p className="p_text_big">Saving one dog will not change the world, but surely for that one dog, the world will
                        change forever</p>
                    <p className="p_text_small">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste dolor dolores, nulla animi
                        quo aut autem voluptatibus mollitia dolorem aspernatur. Repellendus, nostrum. Fugiat molestias iusto
                        explicabo aliquam ex sed ipsam labore, ut repellat eveniet placeat aliquid unde, iure in. Architecto hic
                        doloremque ullam distinctio fugiat non beatae aut laboriosam reprehenderit consequuntur, magni
                        voluptatum neque alias qui modi dolore nihil sint repellat tempora provident iste adipisci corrupti.
                        Perspiciatis omnis similique expedita facere accusamus necessitatibus ipsam aliquid odit? Illum soluta
                        nihil nemo sapiente quas quaerat porro praesentium vitae molestias, earum dolore, iste assumenda
                        delectus cumque temporibus mollitia consectetur laboriosam! Illum, facilis.
                    </p>
                </div>
                <div><img src="images/sec3.jpg" alt="book-image" className="sec-img" /></div>
            </section>
        </div>
    )
}

export default PuppySection
