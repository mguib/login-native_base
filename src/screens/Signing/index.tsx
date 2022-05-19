import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import {
    Box,
    Center,
    Heading,
    Input,
    FormControl,
    VStack,
    Icon,
    Button,
    Checkbox,
    Text,
    HStack,
    WarningIcon,
    WarningOutlineIcon,
    Image,
    Slider,
    Switch,
    useColorMode
} from "native-base";


export function Signing() {
    const {colorMode, toggleColorMode} = useColorMode();


    return (
        <Center
            height='full'
            _dark={{bg: 'black'}}
            _light={{bg: 'white'}}
        // background="amber.100"
        >
            <Image
                size={150}
                alt="Foto do usuário"
                source={{ uri: 'https://github.com/mguib.png' }}
                resizeMode='contain'
                borderRadius={100}
            />
            <VStack
                width="full"
                p={7}
            >
                <Box width="full">
                    <Heading 
                        _dark={{color: 'white'}}
                        _light={{color: 'black'}}
                        color="coolGray.700"
                    >
                        Entrar
                    </Heading>
                    <FormControl isInvalid isRequired>

                        <FormControl.Label>E-mail</FormControl.Label>

                        <Input
                            placeholder="seu@email.com.br"
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml={2}
                                    color="muted.400"
                                />
                            }
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            E-mail inválido
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl>

                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            placeholder="suasenha"
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="lock" />}
                                    size={5}
                                    ml={2}
                                    color="muted.400"
                                />
                            }
                        />
                    </FormControl>


                    <Button
                        mt={7}
                        colorScheme="purple"

                    >
                        Entrar
                    </Button>

                </Box>

                <HStack mt={5}>
                    <Checkbox value="agree" />

                    <Text ml={3}>
                        Concordo com a política de segurança do software.
                    </Text>
                </HStack>

                <Box alignItems="center" w="100%">
                    <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
                        <Slider.Track>
                            <Slider.FilledTrack />
                        </Slider.Track>
                        <Slider.Thumb />
                    </Slider>
                </Box>

                <HStack alignItems="center" space={4}>
                    <Text>Dark</Text>
                    <Switch 
                        isChecked={colorMode === 'light'}
                        onToggle={toggleColorMode}
                        aria-label={
                            colorMode === 'light' ? "Troque para o tema escuro" : "Troque para o tema claro"
                        }
                    />
                    <Text>Light</Text>
                </HStack>
            </VStack>
        </Center>
    )
}