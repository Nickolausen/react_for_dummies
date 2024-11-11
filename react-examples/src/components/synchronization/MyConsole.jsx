export default function MyConsole({ children }) {
    return <ul style={{ height: 500 + "px"}} className="overflow-y-scroll list-group">
        { children }
    </ul>
}