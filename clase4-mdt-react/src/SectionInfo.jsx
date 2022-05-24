import Bio from "./Bio";
const SectionInfo = (props) => {
  if (props.bio) {
    return (
      <section className="section_bio">
        <h2>Biography</h2>
        <Bio bio={props.bio} />
      </section>
    );
  } else {
    let sectionTitle = props.experience ? "Experience" : "Education";
    let items = props.experience ? props.experience : props.education;
    return (
      <section className="section_info">
            <h2 className="h2_info">{sectionTitle}</h2>
            <ul className="ul_info">
              {items.map((item) => (
                <li className="li_info" key={item.id}>
                  {item.movie ? item.movie : item.institute}
                </li>
              ))}
            </ul>
      </section>
    );
  }
};

export default SectionInfo;