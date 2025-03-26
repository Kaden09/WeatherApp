import { Title, IconWithText } from "../index.ts";
import { LocationIcon } from "../../../assets/index.ts";
import { cityAtom } from "../../store/weatherAtoms.ts";
import { useAtomValue } from "jotai";

function Location() {
  const city = useAtomValue(cityAtom);
  return (
    <IconWithText icon={<LocationIcon />}>
      <Title size="middle">{city}</Title>
    </IconWithText>
  );
}
export default Location;
