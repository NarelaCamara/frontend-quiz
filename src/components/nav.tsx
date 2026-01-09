import { Icon } from "./icon";
import { ButtonDarkLightMode } from "./button";

export const Nav = ({
  icon = "",
  title = "",
}: {
  icon?: string;
  title?: string;
}) => {
  return (
    <div className="flex flex-row p-2 items-center">
      {title !== "" && <Icon icon={icon} title={title} />}
      <p className="text-[#313E51] dark:text-[#FFFFFF] text-[14px] font-semibold">
        {title}
      </p>
      <div className="flex grow  justify-end">
        <ButtonDarkLightMode />
      </div>
    </div>
  );
};
