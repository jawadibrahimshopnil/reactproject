import headerProfileImg from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='max-w-screen-xl mx-auto flex justify-between items-center p-4 border-b-2'>
            <h1 className='text-4xl font-semibold'>Knowledge Cafe</h1>
            <img src={headerProfileImg} alt="" />
        </header>
    );
};

export default Header;