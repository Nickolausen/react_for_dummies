export default function ConsoleMessage({ message }) {
    const now = new Date()
    return <div className="border-0 list-group-item list-group-item-dark">
        { now.getHours() }:{ now.getMinutes() }:{ now.getSeconds() } —— { message }
    </div>
}