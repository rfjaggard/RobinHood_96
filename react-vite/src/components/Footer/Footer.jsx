// <<<<<<< HEAD
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer>
//       <div className="footer-container">
//         <div>
//           <h4>meet our team</h4>
//         </div>

        
//         <div className="team">
//           <div className="member-info">
//               <p>Xiaoxue Wang</p>
//               <div className="team-link">
//                 <a href="https://github.com/Xiaoxue895">
//                   <FaGithub />
//                 </a>
//                 <a href="https://github.com/Xiaoxue895">
//                 {/* dont have linkin now */}
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             <div className="member-info">
//               <p>Grayson Slater</p>
//               <div className="team-link">
//                 <a href="https://github.com/graysonslater">
//                   <FaGithub />
//                 </a>
//                 <a href="https://github.com/graysonslater">
//                 {/* dont have linkin now */}
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             <div className="member-info">
//               <p>Tucker</p>
//               <div className="team-link">
//                 <a href="https://github.com/tuckervbos">
//                   <FaGithub />
//                 </a>
//                 <a href="https://github.com/tuckervbos">
//                 {/* dont have linkin now */}
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             <div className="member-info">
//               <p>Bee Thao</p>
//               <div className="team-link">
//                 <a href="https://github.com/Thao88Bee">
//                   <FaGithub />
//                 </a>
//                 <a href="https://github.com/Thao88Bee">
//                 {/* dont have linkin now */}
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             <div className="member-info">
//               <p>Rylan</p>
//               <div className="team-link">
//                 <a href="https://github.com/rfjaggard">
//                   <FaGithub />
//                 </a>
//                 <a href="https://github.com/rfjaggard">
//                 {/* dont have linkin now */}
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             {/* other people */}
//         </div>

//         <div className="inspiration">
//           <p>
//             {/* need deepseek => cheep */}
//             This is a full-stack project where we chose to clone Robinhood. In addition to the two complete CRUD operations, we also attempted to implement a search function and incorporated AI applications 
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-top">
				<div className="footer-links-column">
					<h4>Product</h4>
					<ul>
						<li>
							<Link to="/invest">Invest</Link>
						</li>
						<li>
							<Link to="/credit-card">Credit Card</Link>
						</li>
						<li>
							<Link to="/gold">Gold</Link>
						</li>
						<li>
							<Link to="/crypto">Crypto</Link>
						</li>
						<li>
							<Link to="/retirement">Retirement</Link>
						</li>
						<li>
							<Link to="/options">Options</Link>
						</li>
						<li>
							<Link to="/futures">Futures</Link>
						</li>
						<li>
							<Link to="/learn">Learn</Link>
						</li>
						<li>
							<Link to="/snacks">Snacks</Link>
						</li>
					</ul>
				</div>

				<div className="footer-links-column">
					<h4>Company</h4>
					<ul>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
						<li>
							<Link to="/partner">Partner With Us</Link>
						</li>
						<li>
							<Link to="/careers">Careers</Link>
						</li>
						<li>
							<Link to="/support">Support</Link>
						</li>
					</ul>
				</div>

				<div className="footer-links-column">
					<h4>Legal & Regulatory</h4>
					<ul>
						<li>
							<Link to="/terms">Terms & Conditions</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy</Link>
						</li>
						<li>
							<Link to="/disclosures">Disclosures</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-legal">
				<h4>All investing involves risk</h4>
				<p>
					Brokerage services are offered through Robinhood Financial LLC
					(`&quot;`RHF`&quot;`), a registered broker dealer (member SIPC), and
					clearing services through Robinhood Securities, LLC
					(`&quot;`RHS`&quot;`), a registered broker dealer (member SIPC).
				</p>
				<p>
					Cryptocurrency services are offered through Robinhood Crypto, LLC
					(`&quot;`RHC`&quot;`) (NMLS ID: 1702840). Cryptocurrency held through
					Robinhood Crypto is not FDIC insured or SIPC protected.
				</p>
				<p>
					The Robinhood spending account is offered through Robinhood Money, LLC
					(`&quot;`RHY`&quot;`) (NMLS ID: 1990968), a licensed money
					transmitter.
				</p>
			</div>

			<div className="footer-bottom">
				<p>© 2024 RobinHood. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;

