const Footer = () => {
    return (
        <div className="w-screen bg-customblack h-full mx-auto py-[40px]">
            <div className="custom-container w-full h-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center w-full h-full">
                    <div className="logo w-1/4">
                        <a href="/" className="!no-underline w-full h-full">
                        <span className="text-3xl font-bold color-accentbkp px-2">
                            Logo
                        </span>
                        </a>
                    </div>
                    <div className="w-1/4 flex flex-col gap-4 capitalize text-white">
                        <h6>Accounts</h6>
                        <span>Cart</span>
                        <span>Wishlist</span>
                        <span>My Accounts</span>
                        <span>Login/Register</span>
                    </div>
                    <div className="w-1/4 flex flex-col gap-4 capitalize text-white">
                        <h6>Quick Links</h6>
                        <span>Privacy Policy</span>
                        <span>Terms of Use</span>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </div>
                    <div className="w-1/4 flex flex-col gap-4 capitalize text-white">
                        <h6>Socials</h6>
                        <span>Facebook</span>
                        <span>Terms of Use</span>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
