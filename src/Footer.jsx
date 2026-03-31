const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <span className="text-xl font-extrabold">
                Tool<span className="text-blue-400">Vault</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop marketplace for premium digital tools and software subscriptions.
            </p>
          </div>
          {[
            { title: "Products", links: ["Design Tools", "Dev Tools", "Productivity", "Communication"] },
            { title: "Company", links: ["About Us", "Blog", "Careers", "Press"] },
            { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 ToolVault. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Made with ❤️ for creators everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;