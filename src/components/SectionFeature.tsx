const SectionFeature = ({tagLabel, sectionHeader, sectionDescription}) => {
    return ( <div className="flex flex-col justify-center items-center p-24">
        <h2 className="text-indigo-700">{tagLabel}</h2>
        <h3>{sectionHeader}</h3>
        <p>{sectionDescription}</p>
    </div> );
}
 
export default SectionFeature;