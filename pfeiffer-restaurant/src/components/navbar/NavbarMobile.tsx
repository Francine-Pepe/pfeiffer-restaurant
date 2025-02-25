import { Menu, Button, Text } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconBoxMargin,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function NavbarMobile() {

  const [opened, { toggle }] = useDisclosure();
  
  return (
    <div className="navbar-mobile-container">
      <Menu shadow="md" width={"100vw"}>
      <Menu.Target>
        <Burger lineSize={2} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" color='white' />
      </Menu.Target>

      <Menu.Dropdown style={{left: 0, borderRadius: 0, height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.8)", border: "none" }}  >
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </div>
    
  );
}

export default NavbarMobile