const Titles = ({titleSmall,titleLarge,className='',spanClassName='',headingClassName='',}) => {
    return (
        <div className={`title-wrap ${className}`}>
            <span className={`title_accent-small pl-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:bg-[var(--color-accentbkp)] before:h-full before:z-10 ${spanClassName}`}>
               {titleSmall}
            </span>
            <h5 className={`color-accentbkp mt-2 ${headingClassName}`}>{titleLarge}</h5>
        </div>
    );
};
export default Titles;
