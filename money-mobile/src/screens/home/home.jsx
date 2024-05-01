import { View, Image, Text } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./home.style.js";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={icons.logo} style={styles.logo} />

            <View style={styles.dashboard}>
                <View>
                    <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
                    <Text style={styles.dashboardText}>Total de Gastos</Text>
                </View>
                <Image style={styles.dashboardImg} source={icons.money} />
            </View>
        </View>
    )
}

export default Home;