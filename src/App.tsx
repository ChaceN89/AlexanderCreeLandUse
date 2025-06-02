
import ColorBoxes from "@/components/testing/ColorBoxes"
import DisplayTesting from "@/components/testing/DisplayTesting"
import HeaderTesting from "@/components/testing/HeaderTesting"
import SplashScreen from "@/components/uiElements/splashScreen/SplashScreen"

function App() {


  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-[--color-primary] text-[--color-secondary] p-10">
      <h1 className="text-2xl font-bold mb-8">Alexander Cree Nation Land Usage</h1>
      <ColorBoxes/>
      <HeaderTesting/>
      <DisplayTesting/>
      <SplashScreen/>
    </div>
  )
}

export default App
