import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Register() {
  return (
    <>
    <div className="min-h-screen bg-emerald-950 flex flex-col items-center">
      {/* Navbar */}
      <Navigation />

      <div>
        <h2 className="text-white">body</h2>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}

