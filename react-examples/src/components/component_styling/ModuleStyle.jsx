import cardStyles from './ModuleStyle.module.css'

export default function ModuleStyle() {
    return <>
        <div className={cardStyles.container}>
            <span className={cardStyles.profilePicture}>D</span>
            <div className={cardStyles.bio}>
                <p className={cardStyles.userName}>Desmond Nyamador</p>
                <p>I just learned an easy way to style React Components</p>
            </div>
        </div>
        <small className="text-center w-100 d-block pt-3">
            <a className="text-decoration-none text-secondary" href="https://www.pluralsight.com/resources/blog/guides/inline-styling-with-react">Credits</a>
        </small>
    </>
}