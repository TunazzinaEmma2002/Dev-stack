import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Dev Stack" className="h-8 mb-3" />
          <p className="text-sm text-gray-500 max-w-xs">
            Explore, compare, and build your ideal development stack from the best frontend, backend, database and tooling options.
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-600">GitHub</a>
            <a href="#" className="hover:text-pink-600">Twitter</a>
            <a href="#" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-600">Projects</a></li>
            <li><a href="#" className="hover:text-pink-600">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600">About</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600">Privacy</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}