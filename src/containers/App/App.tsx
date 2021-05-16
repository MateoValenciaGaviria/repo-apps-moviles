import React from 'react';
import './App.css';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
import { WeekView } from '../../components/WeekView/WeekView';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const weekOne = [
  {
    key: 11,
    tittle: 'Introducción de Android Studio',
    videoUrl: 'https://www.youtube.com/embed/twl2mhjOn1E'
  },
  {
    key: 12,
    tittle: 'Contraints',
    videoUrl: 'https://www.youtube.com/embed/17jEYayzwzM'
  },
  {
    key: 13,
    tittle: 'Dimensiones de Views',
    videoUrl: 'https://www.youtube.com/embed/IFRnFb-rOGM'
  },
  {
    key: 14,
    tittle: 'Modos de constraints',
    videoUrl: 'https://www.youtube.com/embed/ReD1gxCsLd0'
  },
  {
    key: 15,
    tittle: 'ScrollView',
    videoUrl: 'https://www.youtube.com/embed/WBPOtBjRpa0'
  },
  {
    key: 16,
    tittle: 'Imágenes',
    videoUrl: 'https://www.youtube.com/embed/UIIXASQtJPY'
  },
  {
    key: 17,
    tittle: 'Referencias de Views',
    videoUrl: 'https://www.youtube.com/embed/wQtwh5-UYN0'
  }
];

const weekTwo = [
  {
    key: 21,
    tittle: 'OnClickListener',
    videoUrl: 'https://www.youtube.com/embed/ZOZgEmW39Dk'
  },
  {
    key: 22,
    tittle: 'Navegación e Intents',
    videoUrl: 'https://www.youtube.com/embed/tICIHshKMWc'
  },
  {
    key: 23,
    tittle: 'Pasando parámetros entre activities',
    videoUrl: 'https://www.youtube.com/embed/szY72-x7qM8'
  },
  {
    key: 24,
    tittle: 'Bottom Navigation Bar',
    videoUrl: 'https://www.youtube.com/embed/h3hhqmtQ2MA'
  },
  {
    key: 25,
    tittle: 'Fragments',
    videoUrl: 'https://www.youtube.com/embed/vH_Wp9GrXQk'
  },
  {
    key: 26,
    tittle: 'Referenciar Views en Fragments',
    videoUrl: 'https://www.youtube.com/embed/Sv3IkgiuT74'
  },
];

const weekThree = [
  {
    key: 31,
    tittle: 'RecyclerView Introducción',
    videoUrl: 'https://www.youtube.com/embed/uWuQTsfFdlg'
  },
  {
    key: 32,
    tittle: 'RecyclerView Adapter',
    videoUrl: 'https://www.youtube.com/embed/0-jMYoofjjM'
  },
  {
    key: 33,
    tittle: 'RecyclerView implementación',
    videoUrl: 'https://www.youtube.com/embed/x1osDKYCLOI'
  },
  {
    key: 34,
    tittle: 'Referenciar Views en los items',
    videoUrl: 'https://www.youtube.com/embed/vhjafVWJiTk'
  },
  {
    key: 35,
    tittle: 'Interacción de Views en items',
    videoUrl: 'https://www.youtube.com/embed/tqkEzOK4yhs'
  },
  {
    key: 36,
    tittle: 'Listas simplificadas',
    videoUrl: 'https://www.youtube.com/embed/f3CbJr5iyH4'
  },
];

const weekFour = [
  {
    key: 41,
    tittle: 'Permisos',
    videoUrl: 'https://www.youtube.com/embed/-AROPiReTBE'
  },
  {
    key: 42,
    tittle: 'Abrir Cámara',
    videoUrl: 'https://www.youtube.com/embed/JXcHnt5K6gE'
  },
  {
    key: 43,
    tittle: 'Configuración de FileProvider',
    videoUrl: 'https://www.youtube.com/embed/5DYADNvkQWs'
  },
  {
    key: 44,
    tittle: 'Abrir la galería',
    videoUrl: 'https://www.youtube.com/embed/-5dSE22hAMs'
  },
  {
    key: 45,
    tittle: 'Mostrar imágenes de la web',
    videoUrl: 'https://www.youtube.com/embed/vfKFBS_YH0w'
  },
  {
    key: 46,
    tittle: 'DialogFragment',
    videoUrl: 'https://www.youtube.com/embed/RJguzqYvSC8'
  },
];

const weekFive = [
  {
    key: 51,
    tittle: 'none',
    videoUrl: 'none'
  }
];

const weekSix = [
  {
    key: 61,
    tittle: 'Internacionalización',
    videoUrl: 'https://www.youtube.com/embed/J_V_6TxcP3Y'
  },
  {
    key: 62,
    tittle: 'Fuentes',
    videoUrl: 'https://www.youtube.com/embed/GKYSCE3PwDk'
  },
  {
    key: 63,
    tittle: 'Temas, estilos y selectores',
    videoUrl: 'https://www.youtube.com/embed/prGZk0pQLNg'
  },
  {
    key: 64,
    tittle: 'Strings y Modo oscuro',
    videoUrl: 'https://www.youtube.com/embed/5DiuW10Nl8Y'
  },
  {
    key: 65,
    tittle: 'Transiciones entre actividades',
    videoUrl: 'https://www.youtube.com/embed/CYk5lle8FJQ'
  },
];

const weekSeven = [
  {
    key: 71,
    tittle: 'Regla 1 Hilos Worker NO modifican la UI',
    videoUrl: 'https://www.youtube.com/embed/sCFf87n-Vb8'
  },
  {
    key: 72,
    tittle: 'Hilos Worker y patrón Observer',
    videoUrl: 'https://www.youtube.com/embed/-9NbptpxZh4'
  },
  {
    key: 73,
    tittle: 'Hilo UI NO ejecuta Networking',
    videoUrl: 'https://www.youtube.com/embed/CY7E5-i3YhI'
  },
  {
    key: 74,
    tittle: 'Serialización JSON',
    videoUrl: 'https://www.youtube.com/embed/8ejiSIIDDDo'
  },
  {
    key: 75,
    tittle: 'Hilo Networking y patrón Observer',
    videoUrl: 'https://www.youtube.com/embed/3e-pVLrqms8'
  },
  {
    key: 76,
    tittle: 'Shared Preferences',
    videoUrl: 'https://www.youtube.com/embed/VjgD3myJBeE'
  }
];

const weekEight = [
  {
    key: 81,
    tittle: 'Configuración del proyecto',
    videoUrl: 'https://www.youtube.com/embed/vLnMFjld8lM'
  },
  {
    key: 82,
    tittle: 'Poner marcadores en mapa',
    videoUrl: 'https://www.youtube.com/embed/BBgWtmBcEGg'
  },
  {
    key: 83,
    tittle: 'Activar LocationListener con GPS',
    videoUrl: 'https://www.youtube.com/embed/9Bi0KQviNHg'
  },
  {
    key: 84,
    tittle: 'Interacciónes de mapa',
    videoUrl: 'https://www.youtube.com/embed/OUaX0qxCSHM'
  },
  {
    key: 85,
    tittle: 'Manejo de áreas',
    videoUrl: 'https://www.youtube.com/embed/jKcxNxqcC2I'
  },
  {
    key: 86,
    tittle: 'Detectar posición en area irregular',
    videoUrl: 'https://www.youtube.com/embed/9fTGjk7u4bI'
  }
];

const weekNine = [
  {
    key: 91,
    tittle: 'Preparación UI',
    videoUrl: 'https://www.youtube.com/embed/vPgT3uik888'
  },
  {
    key: 92,
    tittle: 'POST en Realtime Database de Firebase',
    videoUrl: 'https://www.youtube.com/embed/1TxhfJKQ6Z8'
  },
  {
    key: 93,
    tittle: 'Ejemplo de estructura normalized',
    videoUrl: 'https://www.youtube.com/embed/j9MiFWX34fQ'
  },
  {
    key: 94,
    tittle: 'GET en Realtime Database de Firebase',
    videoUrl: 'https://www.youtube.com/embed/8lsl0EyWkK0'
  },
  {
    key: 95,
    tittle: 'Generación de UI a partir de recepción de datos PARTE 1',
    videoUrl: 'https://www.youtube.com/embed/gXHmKuuqWfc'
  },
  {
    key: 96,
    tittle: 'Generación de UI a partir de recepción de datos PARTE 2',
    videoUrl: 'https://www.youtube.com/embed/NlppnIeZMwY'
  }
];

const weekTen = [
  {
    key: 101,
    tittle: 'Location Worker thread',
    videoUrl: 'https://www.youtube.com/embed/Cc_SdYvecRc'
  },
  {
    key: 102,
    tittle: 'Post de location',
    videoUrl: 'https://www.youtube.com/embed/EAIRPi5D3io'
  },
  {
    key: 103,
    tittle: 'Long polling',
    videoUrl: 'https://www.youtube.com/embed/EkKk4exCibk'
  },
  {
    key: 104,
    tittle: 'Tracking de usuarios',
    videoUrl: 'https://www.youtube.com/embed/GGj0th4p8LA'
  },
  {
    key: 105,
    tittle: 'API de Deezer',
    videoUrl: 'https://www.youtube.com/embed/UXuSLjz3Xk4'
  },
  {
    key: 106,
    tittle: 'Deserialización de 3rd party APIs',
    videoUrl: 'https://www.youtube.com/embed/4Vu3hGNWMVU'
  }
];

const weekEleven = [
  {
    key: 111,
    tittle: 'Instalación Firebase Firestore',
    videoUrl: 'https://www.youtube.com/embed/-SpeZKn-6-8'
  },
  {
    key: 112,
    tittle: 'Inserción de datos Firestore',
    videoUrl: 'https://www.youtube.com/embed/n9yTmkc7NQo'
  },
  {
    key: 113,
    tittle: 'Validación de existencia Firestore',
    videoUrl: 'https://www.youtube.com/embed/cZ2PHCcMPUc'
  },
  {
    key: 114,
    tittle: 'Lectura de una colección Firestore',
    videoUrl: 'https://www.youtube.com/embed/GFo5kfm-zLY'
  },
  {
    key: 115,
    tittle: 'Uso de llaves foráneas Firestore',
    videoUrl: 'https://www.youtube.com/embed/Rs1WeLVjTvk'
  },
  {
    key: 116,
    tittle: 'Publisher subscriber Firestore',
    videoUrl: 'https://www.youtube.com/embed/9TR5DhJTZXU'
  }
];

const weekTwelve = [
  {
    key: 121,
    tittle: 'Crear notificaciones',
    videoUrl: 'https://www.youtube.com/embed/0GyftvK4ydo'
  },
  {
    key: 122,
    tittle: 'Configurar FCM',
    videoUrl: 'https://www.youtube.com/embed/3v7tM1Aq5kI'
  },
  {
    key: 123,
    tittle: 'Suscribirse a FCM',
    videoUrl: 'https://www.youtube.com/embed/3yLhuPQO_wc'
  },
  {
    key: 124,
    tittle: 'Enviar notificación',
    videoUrl: 'https://www.youtube.com/embed/mXOT6ieWHis'
  },
  {
    key: 125,
    tittle: 'Uso de llaves foráneas Firestore',
    videoUrl: 'https://www.youtube.com/embed/Rs1WeLVjTvk'
  },
  {
    key: 12,
    tittle: 'Abrir la app desde notificación',
    videoUrl: 'https://www.youtube.com/embed/I87K6ZzAPlQ'
  }
];

const weekFourteen = [
  {
    key: 141,
    tittle: 'Alistamiento gráfico de Mi Perfil',
    videoUrl: 'https://www.youtube.com/embed/YUgjXGT9Nwg'
  },
  {
    key: 142,
    tittle: 'Envío de archivos',
    videoUrl: 'https://www.youtube.com/embed/5ZpfHTFThrs'
  },
  {
    key: 143,
    tittle: 'Descarga de archivos',
    videoUrl: 'https://www.youtube.com/embed/blj9YSj9ClQ'
  },
  {
    key: 144,
    tittle: 'Integración de RecyclerView',
    videoUrl: 'https://www.youtube.com/embed/lVgJmmnNql8'
  },
  {
    key: 145,
    tittle: 'Descargar fotos en RecyclerView',
    videoUrl: 'https://www.youtube.com/embed/aoByQsf2_wY'
  }
];

const synchronousWeekOneM = [
  {
    key: 1111,
    tittle: 'Semana 1',
    videoUrl: 'https://www.youtube.com/embed/pmXdhHsEGmc'
  },
  {
    key: 1112,
    tittle: 'Semana 2',
    videoUrl: 'https://www.youtube.com/embed/9jYegZ3EAJk'
  },
  {
    key: 1113,
    tittle: 'Semana 3',
    videoUrl: 'https://www.youtube.com/embed/zTabXHekntI'
  },
  {
    key: 1114,
    tittle: 'Semana 4',
    videoUrl: 'https://www.youtube.com/embed/jCYWoTt49ho'
  },
  {
    key: 1115,
    tittle: 'Semana 5',
    videoUrl: 'https://www.youtube.com/embed/IXY5ufqFwhg'
  },
  {
    key: 1116,
    tittle: 'Semana 6',
    videoUrl: 'https://www.youtube.com/embed/tyEewJ7GSNs'
  },
  {
    key: 1117,
    tittle: 'Semana 7',
    videoUrl: 'https://www.youtube.com/embed/xqQB45sZhsA'
  },
  {
    key: 1118,
    tittle: 'Semana 8',
    videoUrl: 'https://www.youtube.com/embed/3uYPe8iR8a4'
  },
  {
    key: 1119,
    tittle: 'Semana 9',
    videoUrl: 'https://www.youtube.com/embed/wWDDLnOmsP0'
  },
  {
    key: 11110,
    tittle: 'Semana 10',
    videoUrl: 'https://www.youtube.com/embed/QPEDpdUIZ0s'
  },
  {
    key: 11111,
    tittle: 'Semana 11',
    videoUrl: 'https://www.youtube.com/embed/h6nlxzmirWI'
  },
  {
    key: 11112,
    tittle: 'Semana 12',
    videoUrl: 'https://www.youtube.com/embed/11q7y_IqLSc'
  },
  {
    key: 11114,
    tittle: 'Semana 14',
    videoUrl: 'https://www.youtube.com/embed/rQTsjbzYqWU'
  }
];

const synchronousWeekOneJ = [
  {
    key: 2221, 
    tittle: 'Semana 1',
    videoUrl: 'https://www.youtube.com/embed/pykU6dITtuU'
  },
  {
    key: 2222,
    tittle: 'Semana 2',
    videoUrl: 'https://www.youtube.com/embed/cnKTSPkc-FQ'
  },
  {
    key: 2223,
    tittle: 'Semana 3',
    videoUrl: 'https://www.youtube.com/embed/LTgRlDWBggw'
  },
  {
    key: 2224,
    tittle: 'Semana 4',
    videoUrl: 'https://www.youtube.com/embed/IZJA69f1loA'
  },
  {
    key: 2225,
    tittle: 'Semana 5',
    videoUrl: 'https://www.youtube.com/embed/9voop8svgfI'
  },
  {
    key: 2226,
    tittle: 'Semana 6',
    videoUrl: 'https://www.youtube.com/embed/nzDUBXBGiyw'
  },
  {
    key: 2227,
    tittle: 'Semana 7',
    videoUrl: 'https://www.youtube.com/embed/rpcwK1HqH38'
  },
  {
    key: 2228,
    tittle: 'Semana 8',
    videoUrl: 'https://www.youtube.com/embed/ti8f4mH5U9U'
  },
  {
    key: 2229,
    tittle: 'Semana 9',
    videoUrl: 'https://www.youtube.com/embed/ODRkfo9OHpE'
  },
  {
    key: 22210,
    tittle: 'Semana 10',
    videoUrl: 'https://www.youtube.com/embed/P0qIhfxU1X4'
  },
  {
    key: 22211,
    tittle: 'Semana 11',
    videoUrl: 'https://www.youtube.com/embed/60GzRp1B9vw'
  },
  {
    key: 22212,
    tittle: 'Semana 12',
    videoUrl: 'https://www.youtube.com/embed/dzQebBAQDEk'
  },
  {
    key: 22214,
    tittle: 'Semana 14',
    videoUrl: 'https://www.youtube.com/embed/lgxw-xF1YmM'
  }
];

const complementaryVideos = [
  {
    key: 1,
    tittle: 'Github y Android Studio',
    videoUrl: 'https://www.youtube.com/embed/hQghfwA-Qu8'
  },
  {
    key: 2,
    tittle: 'Repaso patrón observer',
    videoUrl: 'https://www.youtube.com/embed/edmDtsA4aY0'
  }
];

export const App = () => {
  return (
    <main className="app__main">
      <BrowserRouter>
      <header className="app__main__header">
        <h1 className="app__main__tittle">Aplicaciones Móviles</h1>
        <button className="app__main__btn__repo">Ir al repositorio</button>
      </header>
      <div className="app__main__btns__container">
        <h3 className="app__main__text">Tipo de clase:</h3>
        <Link to="/asincronas" className="app__main__btn__selected">Asíncrona</Link>
        <Link to="/sincronas" className="app__main__btn">Síncrona</Link>
        <Link to="/complementarios" className="app__main__btn">Temas complementarios</Link>
      </div>  
      <div>
      <Redirect from='/' exact to='/asincronas'></Redirect>
        <Route path='/asincronas' render={() => 
          <div >
            <WeekView
            week={'Semana 1'}
            weekTopic={'Elementos UI'}
            weeksArray={weekOne}>
            </WeekView>
            <WeekView
            week={'Semana 2'}
            weekTopic={'Eventos y navegación'}
            weeksArray={weekTwo}>
            </WeekView> 
            <WeekView
            week={'Semana 3'}
            weekTopic={'Listas'}
            weeksArray={weekThree}>
            </WeekView> 
            <WeekView
            week={'Semana 4'}
            weekTopic={'Cámara y galería'}
            weeksArray={weekFour}>
            </WeekView> 
            <WeekView
            week={'Semana 6'}
            weekTopic={'Temas y estilos'}
            weeksArray={weekSix}>
            </WeekView> 
            <WeekView
            week={'Semana 7'}
            weekTopic={'Reglas funcionales'}
            weeksArray={weekSeven}>
            </WeekView> 
            <WeekView
            week={'Semana 8'}
            weekTopic={'Georreferenciación'}
            weeksArray={weekEight}>
            </WeekView> 
            <WeekView
            week={'Semana 9'}
            weekTopic={'HTTP Firebase'}
            weeksArray={weekNine}>
            </WeekView> 
            <WeekView
            week={'Semana 10'}
            weekTopic={'HTTP + Maps'}
            weeksArray={weekTen}>
            </WeekView> 
            <WeekView
            week={'Semana 11'}
            weekTopic={'Firestore'}
            weeksArray={weekEleven}>
            </WeekView> 
            <WeekView
            week={'Semana 12'}
            weekTopic={'Notificaciones'}
            weeksArray={weekTwelve}>
            </WeekView> 
            <WeekView
            week={'Semana 14'}
            weekTopic={'Storage'}
            weeksArray={weekFourteen}>
            </WeekView>         
          </div>}>
        </Route>
        <Route path='/sincronas' render={() => 
          <div >
                            
          </div>}>
        </Route>
        <Route path='/complementarios' render={() => 
          <div >
                            
          </div>}>
        </Route>
      </div>
      </BrowserRouter>
    </main>
  );
}
