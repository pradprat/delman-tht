import {
    Box,
    BoxProps,
    CloseButton,
    Flex,
    FlexProps,
    Icon,
    Link,
    Text,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiGrid,
    FiSearch,
    FiMenu,
    FiUserPlus,
    FiUsers,
} from "react-icons/fi";
import { GrDocumentConfig } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IconType } from "react-icons";
import { ReactText, useState } from "react";
import { useRouter } from "next/router";

interface LinkItemProps {
    href: string;
    name: string;
    icon: IconType;
}

interface SidebarProps extends BoxProps {
    onClose?: () => void;
    isOpen?: boolean;
}

export const SidebarContent = ({ onClose, isOpen, ...rest }: SidebarProps) => {
    const router = useRouter();

    const LinkItems: Array<LinkItemProps> = [
        { href: "/", name: "Dashboard", icon: FiGrid },
        { href: "/users", name: "Users", icon: FiUsers },
        { href: "/registration", name: "Registration", icon: FiUserPlus },
        { href: "/search", name: "Search", icon: FiSearch },
    ];

    return (
        <Box
            transition="0.5s ease"
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ md: isOpen ? 60 : 24 }}
            pos="fixed"
            h="full"
            top={0}
            // animation={"ease"}
            {...rest}
        >
            {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Delman
                </Text>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex> */}
            <NavItem key={"menu"} name={"menu"} icon={FiMenu} onClick={onClose} h={12} p={6}>
                {isOpen ? "Menu" : ""}
            </NavItem>
            {LinkItems.map(link => (
                <NavItem
                    key={link.name}
                    tooltip={isOpen ? "" : link.name}
                    href={link.href}
                    icon={link.icon}
                    active={router.asPath === link.href}
                    h={12}
                    p={6}
                >
                    {isOpen ? link.name : ""}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    active?: boolean;
    href?: string;
    icon?: IconType;
    children: any;
    tooltip?: string;
}
const NavItem = ({ active, icon, href, children, tooltip, ...rest }: NavItemProps) => {
    const router = useRouter();

    return (
        <Link
            onClick={e => {
                e.preventDefault();
                if (href) {
                    router.push(href ?? "/");
                }
            }}
            href={href}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Tooltip label={tooltip} key={"tooltip" + tooltip}>
                <Flex
                    align="center"
                    p="4"
                    m={"2"}
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    bg={active ? "cyan.400" : "unset"}
                    color={active ? "white" : "unset"}
                    _hover={{
                        bg: "cyan.400",
                        color: "white",
                        textDecor: "none",
                    }}
                    {...rest}
                >
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                    {children}
                </Flex>
            </Tooltip>
        </Link>
    );
};
