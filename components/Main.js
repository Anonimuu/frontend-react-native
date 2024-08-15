import {StyleSheet, Text, View }from 'react-native'
import { Image } from "expo-image"

export default function Main(){
    return(
        <View style={styles.main}>
  <Text style={ styles.texto}>Era uma vez, em um mundo distante, chamado Valéria, onde dragões voavam nos céus e magia fluía como um rio caudaloso, vivia um grupo de heróis improváveis. Cada um deles possuía uma habilidade única, mas juntos eram mais poderosos do que podiam imaginar.

No coração de Valéria, havia uma cidade chamada Luminar, conhecida por suas ruas de ouro e torres de cristal. Porém, algo sombrio estava começando a se agitar nas profundezas das Montanhas Cinzentas, um lugar há muito esquecido pelos habitantes da cidade.

Os rumores de uma antiga profecia começaram a circular entre os sábios da cidade. Falava-se de um artefato perdido, o Coração do Dragão, uma gema que continha o poder do primeiro dragão que já existiu. Se caísse em mãos erradas, poderia trazer destruição ao mundo. No entanto, a mesma profecia mencionava um grupo de heróis destinados a encontrar e proteger o artefato.

Esse grupo era composto por:

- **Elara**, uma elfa arqueira com uma pontaria infalível e uma conexão profunda com a natureza.
- **Thorn**, um guerreiro humano com uma força sobre-humana, conhecido por sua lealdade e coragem.
- **Mira**, uma maga meio-elfa, mestre das artes arcanas e das palavras antigas.
- **Kara**, uma ladina ágil e astuta, capaz de se mover nas sombras sem ser vista.
- **Ragnar**, um anão ferreiro, cuja habilidade com o martelo era tão lendária quanto sua teimosia.

Certa noite, um misterioso ancião os encontrou em uma taverna na parte mais antiga de Luminar. Com uma voz fraca, ele lhes contou sobre a profecia e sobre o Coração do Dragão. Os heróis, cientes dos riscos, decidiram aceitar a missão e partiram em uma jornada que os levaria a lugares inexplorados e cheios de perigos.

Ao chegarem nas Montanhas Cinzentas, depararam-se com desafios que testaram seus limites. Foram emboscados por trolls, enfrentaram tempestades mágicas e desvendaram enigmas antigos. Mas o maior desafio estava por vir.

Nas profundezas de uma caverna esquecida, encontraram o Coração do Dragão, mas não estavam sozinhos. Um antigo dragão negro, guardião do artefato, despertou de seu sono milenar para protegê-lo. A batalha foi feroz. Thorn e Ragnar enfrentaram o dragão de frente, enquanto Elara e Kara atacavam de longe. Mira, usando todo o seu poder, conjurou feitiços poderosos para enfraquecer a criatura.

Quando tudo parecia perdido, o Coração do Dragão começou a brilhar intensamente. A luz cegante envolveu o grupo e, por um breve momento, eles sentiram o poder do primeiro dragão fluindo através deles. Com um último esforço, combinaram suas forças e derrotaram o dragão.

Exaustos, mas vitoriosos, eles tomaram o Coração do Dragão. Sabiam que a luta estava longe de terminar. Outras forças, ainda mais sombrias, poderiam tentar roubar o artefato. Mas, por enquanto, eles tinham cumprido seu destino.

Voltaram para Luminar como heróis, mas conscientes de que a verdadeira batalha era proteger o que haviam conquistado. E assim, o grupo continuou suas aventuras, sabendo que o destino de Valéria estava em suas mãos.

E você, leitor, se fosse parte desse grupo, qual caminho escolheria?</Text>

      {/* <Image 
      
      style = {styles.ft}
      source ={require('../assets/gobara.jpg')} 
      
      /> */}

        

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // flex: 3,
       backgroundColor: '#150D15',
        // alignItems: 'center',
        // justifyContent: 'center'

        padding:'20px',
    
    
      },

      texto:{
        color: '#FFFFFF'
      },

      ft: {
        height: 50,
        width: 50,
      }
     
     
})