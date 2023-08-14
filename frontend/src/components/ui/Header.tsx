

const Header = (props: { title: string, headerShown: boolean }) => {
    const { title, headerShown } = props;
    return (
        <div id="top-navigation" style={{ display: !headerShown ? 'none': 'block'}} className="capitalize flex items-center text-sm font-bold justify-center h-10">{title}</div>
    )
}

export default Header;