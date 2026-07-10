import { spells } from "../../data/spells";

function Barony_Spells() {
  const spellData = spells;

  return (
    <div className="baronyGrid">
      <h1>{spellData.id}</h1>

      {spellData.spellSections.map((section) => (
        <>
          <h2>{section.sectionName}</h2>
          {section.sectionContent}
        </>
      ))}
    </div>
  );
}

export default Barony_Spells;
