import WelcomePage from "./components/WelcomePage"
import ConditionalRendering from "./components/conditional_rendering/ConditionalRendering"
import EventsHandling from "./components/events_handling/EventsHandling"
import StateManagement from "./components/state_management/StateManagement"
import ComponentStyling from "./components/component_styling/ComponentStyling"
import Synchronization from "./components/synchronization/Synchronization"

export default function App() 
{
    return <>
        <WelcomePage/>
        <ConditionalRendering/>
        <EventsHandling/>
        <StateManagement/>
        <ComponentStyling/>
        <Synchronization/>
    </>
}