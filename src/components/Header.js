const Header = () => {
    return (
        <div className="grid grid-cols-[auto,1fr,auto] items-center p-2 m-2 shadow-lg">

            {/* Left */}
            <div className="flex items-center gap-4">
                <img
                    src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
                    alt="menu"
                    className="h-10"
                />
                <img
                    src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
                    alt="logo"
                    className="h-16"
                />
            </div>

            {/* Center */}
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    className="border border-gray-400 px-3 py-1 w-1/2 rounded-l-full"
                />
                <button className="border border-gray-400 px-3 py-1 rounded-r-full">Search</button>
            </div>

            {/* Right */}
            <div className="flex justify-end">
                <img
                    src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
                    alt="user"
                    className="h-12 w-12 rounded-full"
                />
            </div>

        </div>
    );
};

export default Header