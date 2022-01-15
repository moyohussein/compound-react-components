import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuListItem,
  MenuOptionGroup,
  MenuListOption,
} from "./libs/Menu";
import { useToggle } from "@hooks/useToggle";
import React from "react";
import { Divider } from "./libs/Divider";

export function Example() {
  const [open, toggle] = useToggle();
  return (
    <Menu
      arrow
      placement="left-end"
      verticalOffset={10}
      closeOnOutsideClick={false}
      open={open}
      toggle={toggle}
    >
      <MenuButton>menu</MenuButton>
      <MenuList>
        <MenuGroup title="Menu">
          <MenuListItem disabled>Profile</MenuListItem>
          {/* <Divider /> */}
          <MenuListItem>My Account</MenuListItem>
          {/* <Divider /> */}
          <MenuListItem>Logout</MenuListItem>
          <MenuListItem>Profile</MenuListItem>
        </MenuGroup>
        <Divider />
        <MenuOptionGroup title="Menu" defaultValue="ade, 1" type="checkbox">
          <MenuListOption value="ade">Ade</MenuListOption>
          {/* <Divider /> */}
          <MenuListOption value="1">My Account</MenuListOption>
          {/* <Divider /> */}
          <MenuListOption value="2">Logout</MenuListOption>
          {/* <Divider /> */}
          <MenuListOption value="3">Profile</MenuListOption>
          {/* <Divider /> */}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
