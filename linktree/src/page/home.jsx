import "./home.css"

export default function Home() {
    return (
            <div className="test-container">
                <div class="about-container">
                    <div class="wrapper">
                        <img src="/asset/IMG-20220722-WA0014.jpg" alt="profile" id="profile__img" />
                    </div>
                </div>
                <div className="name">
                    <h3>Annette Black</h3>
                </div>
                <div className="link-blocks">
                    <p>Twitter Link</p>
                </div>
                <div className="link-blocks">
                    <p>Zuri Team</p>
                </div>
                <div className="link-blocks">
                    <p>Zuri Books</p>
                </div>
                <div className="link-blocks">
                    <p>Python Books</p>
                </div>
                <div className="link-blocks">
                    <p>Background Check for Coders</p>
                </div>
                <div className="link-blocks">
                    <p>Design Books</p>
                </div>
            </div>
    )
}