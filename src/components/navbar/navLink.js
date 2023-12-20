import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { TenisContex } from "@/app/context/tenisProvider";
import { datos } from "./db";
import { useContext } from "react";

export const NavLink = () => {

    //const {idioma}= useContext(TenisContex);
    const idioma='esp'
    const Links =( idioma==='esp')
    ? datos?.esp.navbar.links
    : datos?.ing.navbar.links;
    
        return (
        <HStack as={'nav'} spacing={4}>
              {Links?.map((e) => (              
                <Box key={e.title}>
                <Link href={e.url}>
                {e.title}
                </Link>
                </Box>
              ))}
        </HStack>
    )
  }