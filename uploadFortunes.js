// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0yIuiOIME6Irx7Clpg2UkubS0bG5sli8",
  authDomain: "db121-7c0fe.firebaseapp.com",
  databaseURL: "https://db121-7c0fe-default-rtdb.firebaseio.com",
  projectId: "db121-7c0fe",
  storageBucket: "db121-7c0fe.firebasestorage.app",
  messagingSenderId: "498482916628",
  appId: "1:498482916628:web:b1dde866939f073d74a601",
  measurementId: "G-TS9MQJX0Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import JSON data
const fortunes = [
  {
    "number": 1,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่หนึ่งสมมาทปรารถนา ทายไว้ว่ามีคนชุบอุปถัมภ์ หมายสิ่งใดที่ในจิตต์คิดจะทำ ว่าคงสำเร็จการประมาณมี แต่ช้า ๆ จึงจะสมอารมณ์ปอง ทั้งพวกพ้องปรีเปรมเกษมศรี ว่าอยู่เย็นเป็นสุข ทุกเดือนปี แม้นใบนี้ถามโรคที่โศรกกาย ว่าคงจะเบาบางเหมือนอย่างว่า หรือถามหาลูกหนี้พี่น้องหายว่าคงจะพบพักตร์เหมือนทักทาย หรือถามหมายหาลาภไม่หยาบคำ ว่าช้า ๆ คงจะสมอารมณ์นึก ได้ก้องกึกเหล่ากอเป็นข้อขำ ถามหาคู่ดีนักเหมือนชักนำขอจบคำที่หนึ่งรำพึงเอยฯ"
  },
  {
    "number": 2,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สองต้องกันเหมือนจันทร์ฉาย เปรียบกับต้นพฤกษีคราวที่ตาย แล้วกลับกลายได้เป็นเหมือนเช่นเดิม ได้ผลิดอกออกใบไสวสว่าง ต้องน้ำค้างลมเชยรำเพยเสริม เหมือนกระจกบานเก่าเมื่อคราวเดิม ต้องเพิ่มเติมขัดถูจึงดูงาม จะทำการสิ่งใดพร้อมใจกัน จงผ่อนผันหารือนับถือถาม คงสมจิตต์สมปองทำนองความ ใบนี้ถามคนไข้ว่าได้คลาย ถามลูกหนี้พวกพ้องว่าต้องพบ ถามเรื่องคู่รู้จบไม่สมหมาย ถามหาลาภว่าดีพาทีทาย จบภิปรายเลขสองทำนองเอยฯ"
  },
  {
    "number": 3,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สามความยากลำบากล้น จะทำการก็ป่วยการรำคาญตน ว่ามีคนปองร้ายไม่วายวัน กินไม่อิ่มนอนไม่หลับกลับให้ทุกข์ ไม่มีสุขสักเวลาแทบอาสัญ แต่ถามเรื่องเป็นความไม่คร้ามกัน คงผ่อนผันสู้ได้เป็นไรมี จะไปหาผู้ใดก็ไม่ยาก ถามลูกหนี้ที่จากพลัดพรากหนี ว่ายังไม่พบกันในทันที หาลาภนี้ก็ยากลำบากกาย ถามเรื่องคู่สู่สมภิรมย์ภักตร์ ว่าร้ายนักฟั่นเฟือนไม่เหมือนหมาย จงสงบไว้ก่อนค่อยผ่อนกาย หมดคำทายที่สามจบความเอยฯ"
  },
  {
    "number": 4,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สี่นี้ไซร้ว่าไกลคู่ มิได้รู้ปะพบประสพสองเหมือนลูกไก่ฝูงเดียวเที่ยวคะนอง ตัวหนึ่งต้องจากไปเสียไกลกัน ต่อนาน ๆ จึงจะพบประสพพักตร์ได้สมศักดิ์สุขีเป็นศรีสันต์ จะทำการสิ่งใดพร้อมใจกัน แต่ข้อนั้นทายไว้ที่ในที อย่าดำเนินเดินหน้าท่านว่าร้ายเราต้องหมายตามหลังระวังหนี เหมือนพระจันทร์ร่อนเร่ชนเมฆี พระแสงศรีสุริยงต้องลงดิน ถามคนเจ็บว่าหายสบายจิตต์ ถามเรื่องคิดเป็นความตามกระสินธ์ คงชนะเจียวหนาอย่าราคิน แม้นถามถิ่นคนที่หลบหนีไกล ว่ายังไม่ปะพบประสพพักตร์ ถามลูกรักในครรภ์ที่มั่นหมาย ว่าคงรู้เห็นได้เป็นชายจบคำทายที่สี่เท่านี้เอยฯ"
  },
  {
    "number": 5,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ห้าว่าไว้ในอักษร ไม่มีใครทำร้ายขจายจรอย่าทุกข์ร้อนไปเลยไม่เคยการ ถ้าแม้นรักมักได้ควายของเขา ม้าของเราจะต้องพรากจากสถาน ถ้าจะคบผู้ใดให้ดูการ ถือโบราณแบบเก่าอย่าเบาความ แม้นถามหาเนื้อคู่ว่าอยู่ไกล ยังไม่ได้เหมือนจิตจงคิดขาม ถามลูกหนี้หนีไปในใจความจะติดตามไม่พบประสบกัน ถามหาลาภนี้ไซร้ก็ได้ยาก ต้องลำบากทุกข์ร้อนจงผ่อนผัน แม้นถามบุตรสุดใจที่ในครรภ์ เลขห้านั้นว่าหญิงทุกสิ่ง เอยฯ"
  },
  {
    "number": 6,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่หกตกจิตต์คิดสงสัย ว่าอย่านึกกลอกกลับจงดับใจ แม้นนานไปคงสมอารมณ์ปอง เดี๋ยวนี้เลวเหลวไหลไม่ได้เรื่อง ขืนยักเยื้องร้อนรนจะหม่นหมอง แม้นถามหาลาภว่าได้สมอารมณ์ปองถามพวกพ้องลูกหนี้ที่รุงรัง ว่าคงจะพบประสพพักตร์อย่าเยื้องยังคงสมอารมณ์หวัง ใครขอได้ใบนี้ไม่มีบัง เป็นจริงจังดีจริงทุกสิ่งอัน ถึงคนเจ็บก็หายสบายจิตต์ คงสมคิดสุขีเป็นศรีสรรค์ถามหาคู่ใบนี้ว่าดีครัน จบที่หกเท่านั้นนะท่านเอยฯ"
  },
  {
    "number": 7,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่เจ็ดเสร็จทุกข์เป็นสุขี ทั้งบ้านเรือนเพื่อนกินก็ยินดี แต่ตัวนี้เคืองขุ่นอยู่วุ่นวาย จงทำบุญให้ทานประมาณจิตต์ คงสมคิดแสนสมอารมณ์หมาย อย่าอ้อมโอบโลภมากจะยากกาย ฟังภิปรายพาทีคงดีจริง เหมือนปลูกต้นผลไม้ไว้ใกล้บ้าน คงเป็นการอยู่สุขสิ้นทุกสิ่ง ถามหาลาภใบนี้ว่าดีจริง หรือถามสิ่งของหายว่าได้คืน ถามหาคู่สู่สมภิรมย์ภักตร์ ว่าดีนักแสนดีเป็นที่ชื่น ถามคนเจ็บว่าหายสบายคืน ถึงเรื่องอื่นก็ดีเท่านี้เอยฯ"
  },
  {
    "number": 8,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่แปดนี้ไซร้แม้นได้สม คงชื่นชมสุขีเป็นที่สอง เปรียบเหมือนต้นพฤกษามณฑาทองรากแก้วต้องขาดไปอยู่ไม่ทน เวลานี้ก็แล้งเหมือนแบ่งรับ จงเปลี่ยนกลับย้ายที่จึงมีผลถามของหายหายากลำบากตน ถามหาต้นเนื้อคู่ไม่สู้ดี แม้นถามเรื่องเป็นความต้องขามเข็ด ไม่สำเร็จสู้ยากต้องบากหนี ถามหาลาภเล่าไซร้ก็ไม่ดี จบที่แปดเท่านี้ไม่ดีเอย ฯ"
  },
  {
    "number": 9,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่เก้าเล่าขัดตัวมัจฉา จะกลายเป็นมังกรเหมือนก่อนมา คิดไปหาลาภผลด้วยกลใด ทิศทักษิณทิศประจิมริมวิถี ว่าไปดีมาดีเป็นสีใส เปรียบเหมือนกับนาวาที่คลาไคล ได้แล่นไปตามลมคงสมปอง ว่ามังกรกับงูยังรู้แปลง เหมือนหน้าแล้งวิดน้ำสักสามสอง คงจะได้ฟุ้งเฟื่องเป็นเนืองนอง ถามคนต้องพลัดพรากที่จากไป ว่าคงจะพบปะประสบภักตร์ ถามคู่รักร่วมจิตพิศมัย ว่ายังไม่ได้กันในทันใด ถามคนไข้ว่ายังชั่วบอกตัวตรง ถามหาลาภใบนี้ว่าดีนัก คงจะสมจิตคิดประสงค์ จงอุตส่าห์หมั่นทำในจำนง ที่เก้าคงว่าดีเท่านี้เอยฯ"
  },
  {
    "number": 10,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบหยิบยกตกกับใบ้ เหมือนได้นอนหลับแล้วกลับฝัน จะพูดจาแสนยากลำบากครัน ไม่รู้วันเป็นตายวายชีวา แม้นถามลูกในท้องต้องเป็นหญิง ถ้าถามสิ่งของหายอย่าหมายหา สุดแสนยากจะพบประสบตา แต่ถามคนไข้ว่าได้คลาย ถามถึงคู่สู่สมภิรมย์ภักตร์ ว่าสมศักดิ์แสนสมอารมณ์หมาย ถามหาลาภได้ยากลำบากใจ แต่นานไปคงสมอารมณ์เอย ฯ"
  },
  {
    "number": 11,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบเอ็ดเหมือนกับพระจันทร์ฉาย ขี้เมฆปิดมิดไว้เคียงใกล้กาย แล้วผันผายออกห่างสว่างเดิมชาติปางก่อนทำเท่าใดได้เท่านั้น พอสมกันสมมูลไม่พูนเพิ่ม ข้างฝ่ายหน้าว่าดีทวีเดิม แม้ความเดิมแม่ลูกได้ถูกกัน ทำสิ่งหนึ่งสิ่งใดคงได้สม ถามคู่ชมว่าดีเป็นศรีสันต์ ถามลูกหนี้พวกพ้องพี่น้องกัน คงผ่อนผันได้สมอารมณ์ปอง ถามหาลาภก็ดีเป็นที่ยิ่งถามถึงสิ่งสู้ความว่างามผ่อง ดีทั้งนั้นใบนี้เหมือนสีทอง จงตรึกตรองอ่อนน้อมให้พร้อมเอยฯ"
  },
  {
    "number": 12,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบสองคนหนึ่งเดินนำหน้า คนหนึ่งว่าตามหลังมาทั้งสอง เปรียบเหมือนคนกับใบ้น้ำใจปอง พูดไม่คล่องแสนยากลำบากครัน ว่าจะมีคนชุบอุปถัมภ์ เหมือนถ้อยคำพาทีคนที่ฝันเวลาตนหายไปร้อนใจครัน ให้ป่วนปั่นเปล่า ๆ ไม่เข้าการ ถามหาคู่สู่สมภิรมย์ภักตร์ ว่าร้ายนักจงแจ้งแถลงสาร ถามเป็นความว่าดีไม่มีวานถามถึงการเพื่อนรักประจักษ์ใจ ว่าคงจะได้สมอารมณ์นึก ที่ตื้นลึกจงแจ้งแถลงไข พบพี่ป้าลุงน้าเพื่อนอาลัย ถามหาลาภไซร้ไม่สู้ดีเท่านี้เอยฯ"
  },
  {
    "number": 13,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบสามเปรียบตนเหมือนต้นไม้ ยังมิได้ผลิดอกหรือออกผล เหมือนรุกขาหน้าแล้งต้องแฝงตน ไร้น้ำฝนยังไม่มิได้มี อย่าถูกน้ำค้างที่กลางแจ้ง อย่าเคลือบแคลงจากไปให้ไกลที่ จงรอรั้งฟังว่าคำพาที แม้นการมีค่อยคิดตามกิจการ จึงจะไม่เสียเรื่องให้เคืองแค้น ถ้ามาตรแม้นขอบุตรสุดสงสาร ว่ายังไม่มีมาในอาการ ถามพบพานพวกพ้องพี่น้องดี ถามหาลาภว่าสมอารมณ์หมาย ถามถึงรายเรื่องคู่นั้นจู้จี้ ว่ายังไม่ได้กันในทันที จบใบที่สิบสามหมดความเอย"
  },
  {
    "number": 14,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบสี่นั้นว่าเหมือนฟ้าดิน ยังราคินต่าง ๆ ระคางเขิน จะไปหาผู้ใดให้เผอิญ เป็นการเกินทวารปิดมิดบัง จะร้องเรียกก็ขามให้คร้ามจิตต์เราต้องคิดคอยก่อนฟังสอนสั่ง ว่ายังไม่กลายชัดเป็นสัจจัง เหมือนอยู่ยังในวนชลธาร ในอารมณ์ไม่สมกับความคิด คู่เชยชิดนั้นหนาฟังว่าขาน ไม่สู้ดีดอกคะจะระราน ถามอาการเจ็บไข้ว่าได้คลายถามเพื่อนฝูงน้องพี่ลูกหนี้นั้น ว่าพบกันแสนสมอารมณ์หมาย ถามหาลาภไม่ดีพาทีทาย หมดภิปรายเท่านั้นหนาท่านเอยฯ"
  },
  {
    "number": 15,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบห้าว่าไว้ในอักษร จะทำการสิ่งใดไม่อาวรณ์ สโมสรสมคิดเหมือนจิตต์ปอง จะค้าขายก็ดีเป็นที่สุด แม้นถามบุตรว่าชายอยู่ฝ่ายท้องถามหาคู่ชูชมได้สมปอง แม้นถามของหายมาว่าหาพบ ถามหาลาภก็ดีเป็นที่หนึ่ง แม้นถามถึงคนไข้เหมือนไข่กบ ว่าหายวันหายคืนได้คืนครบ ถามหาพบลูกหนี้ก็ดีครัน แม้ผู้ใดขอได้ที่ใบนี้ ว่าแสนดีแสนสมเป็นคมสัน คงอยู่เย็นเป็นสุขทุกคืนวัน เกษมสันต์แสนสมอารมณ์เอยฯ"
  },
  {
    "number": 16,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบหกว่าสมอารมณ์นัก คงพบภักตร์คนชุบอุปถัมภ์ กับคนที่มีบุญการุณธรรม เสมอร่ำ ๆ ไป ด้วยใจดี ว่าข้างหน้าจะถาวรเจริญสุข ไม่มีทุกข์ขุ่นข้องหม่นหมองศรี จะสมความปรารถนาเหมือนพาที แม้นใบนี้ถามไข้ว่าได้คลาย ถามถึงคู่สู่สมภิรมย์ภักตร์ ว่าสมศักดิ์แสนสมอารมณ์หมาย ถามหาลาภว่าดีพาทีทาย หรือถามหมายเป็นความไม่ลามลวน คงจะสู้ได้แท้เป็นแน่นัก ถึงจะซักจะไซร้เรื่องไต่สวน จงตอบต่อข้อความตามกระบวน ขอจบถ้วนใบนี้ว่าดีเอยฯ"
  },
  {
    "number": 17,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบเจ็ดไม่เสร็จเหมือนใจหมาย คิดทำการหว่านจุนดูวุ่นวาย จะหาร้ายใส่ตัวจงกลัวเกรงอย่าร้อนใจไปเลยไม่เคยนึก ค่อย ๆ ตรึกจงเจาะให้เหมาะเหม็ง คงสมหมายชมชื่นได้ครื้นเครง ตัวเราเองต้องเจียมเสงี่ยมตัว ว่าเชือดเนื้อเถือหนังเราทั้งสิ้น จงผันผินเห็นแผลมีแต่ชั่ว ถามคนเจ็บว่าหายสบายตัว หรือพันพัวเรื่องความที่ถามมา คงชนะทั้งสิ้นอย่ากินแหนง ถามเคลือบแคลงลูกหนี้ไม่ดีหนาเพื่อนฝูงก็ไม่พบประสบตา แต่ถามหาลาภนี้ว่าดีเอยฯ"
  },
  {
    "number": 18,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบแปดเห็นทรัพย์ติดกับหิน เปรียบเหมือนเราจะหาเป็นราคิน ก็สุดสิ้นแสนยากลำบากกายว่าป่วยการเปล่า ๆ ไม่เข้าข้อ เหมือนถ่อเรือทวนลมระบมหมาย จะไปหาก็ยากลำบากกาย ต่อนานไปคงเหมาะสงเคราะห์มี ถามคนเจ็บว่าหายสบายจิตต์ ถามเป็นความตามติดต้องคิดหนี ถามหาลาภบอกไว้ว่าไม่ดี ถามบุตรที่ในครรภ์นั้นเป็นชาย ใครขอได้ใบนี้เป็นที่ยั้ง เราต้องตั้งอารมณ์คงสมหมาย ขอจบคำเท่านี้พาทีทาย ข้างต้นนั้นว่าวายปลายดกเอยฯ"
  },
  {
    "number": 19,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่สิบเก้าเกิดมาเป็นมนุษย์ เวลาดีก็แสนดีที่สุด จงยั้งหยุดตรึกตรองจะทำการ ช้า ๆ หน่อย คงสมอารมณ์ปอง ทั้งพวกพ้องปรีเปรมเกษมสานต์ อยู่จนแก่จนคร่ำไม่รำคาญ แม้นถามการเจ็บกายว่าหายดี ถามหาลาภก็ได้เหมือนใจนึกจะครื้นครึกเปลื้องทุกข์เป็นสุขี ถามเป็นความนั้นไซร้ไม่สู้ดี ถามถึงที่ไปมาจะหาใคร ก็ไม่สมอารมณ์เหมือนใจจิตต์ สุดจะคิดจะแจ้งแถลงไขแต่ปลายมือว่าดีไม่มีภัย ขอจบใบที่สิบเก้าเท่านี้เอยฯ"
  },
  {
    "number": 20,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบนับถือไม่ซื่อตรง แม้นมั่นคงคงสมอารมณ์บ้าง ระวังตัวให้ดีในที่ทาง ด้วยเราว่างคนซึ่งจะพึ่งพา ใครขอได้ใบนี้เป็นที่เคราะห์ ต้องเสดาะด้วยน้ำมันฟังปัญหา เติมตะเกียงไว้นี่ที่บูชา ไปข้างหน้าคงสมอารมณ์ปอง ถามคนเจ็บว่าหายสบายจิตแม้นถามคิดขอบุตรเป็นสุดหมองยังไม่ได้สมนึกที่ตรึกตรอง แม้นถามปองหาลาภไม่หยาบคายว่าไม่ได้มีเป็นที่เห็น แต่ถามเป็นความกันที่มั่นหมาย คงชนะเหมือนคำที่ทำนายต้องถวายน้ำมันเท่านั้นเอยฯ"
  },
  {
    "number": 21,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบเอ็ดชูชุบเหมือนบุบผา ต้องลมแดดแผดส่องทำนองมา แต่ทว่าไม่แห้งอย่าแหนงเลยเหมือนลูกนกสอนบินเที่ยวผินผัน ถูกลมหันพลัดตกโอ้อกเอ๋ย แต่ข้างหน้ารื่นรมย์ได้ชมเชย คงสะเบยแสนสบายไม่วายวัน ถามคนเจ็บว่าเบาบรรเทาจิตถามหามิตรคู่ชมภิรมย์ขวัญ ว่ายังอยู่ห่างไกลไม่ได้กัน ถามความนั้นสู้ยากลำบากการ แต่มีลาภอยู่บ้างเหมือนอย่างทาย คงสมหมายปรีเปรมเกษมสานต์ ใครขอได้ใบนี้ไม่ช้านาน เกษมสานต์แสนสมอารมณ์เอยฯ"
  },
  {
    "number": 22,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบสองต้องความตามหลังเขา จะทำการสิ่งใดอย่าใจเบา ตัวของเราต้องหาปรึกษาการให้มีผู้ชี้แจงแสดงกิจ คงสมคิดดอกหนาฟังว่าขาน อย่าเป็นทุกข์ไปเลยไม่เคยการ ถือโบราณเอาไว้คงได้ดี ถามคนเจ็บว่าหายเหมือนทายทักคงจักบรรเทาทุกข์เป็นสุขี ถามเป็นความท่านดูไม่สู้ดี ถามลาภมีมากมายเหมือนหมายปองถามไปหาผู้ใดที่ในจิตต์ คงสมคิดแสนสมภิรมย์สอง ใครขอได้ใบนี้เหมือนสีทอง ยี่สิบสองจบกันเท่านั้น เอยฯ"
  },
  {
    "number": 23,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบสามความดีเป็นศรีสุข ถึงใครต้องเจ็บไข้อย่าได้ทุกข์ คงเป็นสุขทั้งเดือนไม่เคลื่อนคลาย ทั้งจะมีลาภด้วยอย่างวยงง สมประสงค์แสนสมอารมณ์หมาย ไปทางไกลจะได้ตามความสบาย แม้นถามหมายใด ๆ คงได้การ ถามคนเจ็บว่าหายสบายจิตต์ แม้นถามคิดเรื่องความที่ตามศาล คงชนะเป็นแท้แน่แก่การ เกษมสานต์แสนสมอารมณ์ปองถามหาลาภก็ดีเป็นที่ยิ่ง สิ้นทุกสิ่งดีพร้อมไม่หม่นหมอง เหมือนโกสุมบุบผามณฑาทอง ในทำนองใบนี้ว่าดีเอยฯ"
  },
  {
    "number": 24,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบสี่นี้ไซร้ว่าไกลนัก เราสุดจักแลเห็นที่เช่นของ อีกสักหน่อยจึงจะสมอารมณ์ปอง ม้าตัวทองคอยท่าข้างหน้ามี คงได้พบคนชุบอุปถัมภ์ ทั้งคมขำดีนักเป็นศักดิ์ศรี คงสบความตามจิตต์ที่คิดดี แม้นใบนี้ถามไข้ว่าได้คลาย ถามไปไหนก็ดีเป็นที่ยิ่ง สนทุกสิ่งคงสมอารมณ์หมาย ถามหาลาภได้นักเหมือนทักทาย ใบนี้หมายการภายหน้าท่านว่าดี ถามอะไรให้ดูที่รู้ความ ได้สมความหมดทุกข์เป็นสุขี ใบนี้หนาจัดว่าเป็นเคราะห์ดี เป็นความนี้สู้ยากลำบากเอยฯ"
  },
  {
    "number": 25,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบห้าว่าไว้ในอักษร เหมือนเรือเล็กไคลคลากลางสาคร พายุต้องทวนลมระบมใจจะข้ามฟากแสนยากลำบากยิ่ง สิ้นทุกสิ่งจงแจ้งแถลงไข แม้นถามการไปมาจะคลาไคล ท่านบอกไว้ตามคำที่ทำนาย ทิศทักษิณทิศประจิมริมวิถี หนทางนี้ควรท่านจะผันผาย ถามคนเจ็บหายยากลำบากกาย ถึงถามหมายพึ่งใครว่าไม่มีถามหาลาภว่าเลยดูเหลวเลื่อน ถามของเคลื่อนหายไปจากในที่ สุดแสนยากที่จะพบประสบมีแต่เป็นความว่างามดีเท่านี้ เอยฯ"
  },
  {
    "number": 26,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบหกเปรียบใกล้ดอกไม้บาน ถึงมีการทุกข์ร้อนจงผ่อนผัน สุดแท้แต่บุญกรรมเป็นสำคัญ ตัวเรานั้นต้องเจียมเสงี่ยมตัว จะทำการสิ่งใดอย่าได้หาญ ขืนรำคาญฮึกฮักว่าจักชั่ว ต่อภายหลังจักต้องหม่นหมองมัว คิดถึงตัวถึงกายไม่วายวัน เปรียบเหมือนเราปลูกต้นผลไม้ คนอื่นได้เก็บกินไม่ผินผัน แม้นถามบุตรสุดใจที่ในครรภ์ ว่าบุตรนั้นเป็นหญิงจริง ๆ ถามเป็นใจความว่าเห็นพอเป็นกลาง ถามคนพึ่งพาท่านว่าห่าง ถามหาลาภบอกไว้ไม่อำพราง ให้ยับยั้งยอมสยบจบความเอยฯ"
  },
  {
    "number": 27,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบเจ็ดเสร็จสมอารมณ์หมาย เปรียบเสมือนต้นรุกขาเวลาตาย ต้องสาดสายน้ำค้างในกลางคืน แตกใบอ่อนได้จริงทุกกิ่งก้าน ก็เหมือนการสาวหนุ่มได้ชุ่มชื่น คงจะสมคิดบ้างอยู่ยั่งยืน บ้านเรือนรื่นสุขียินดีครัน ถ้าแม้นถามเป็นความไม่ขามเข็ด ชนะเสร็จดับร้อนได้ผ่อนผัน ถามหาลาภใบนี้ว่าดีครัน คนเจ็บนั้นว่าหายสบายเบา ทั้งคนเหมาะสงเคราะห์ก็มีอยู่ เหมือนบุญชูให้พบประสบเขา จบภิปรายทายคำในสำเนา ต้องจัดเอาว่าดีเท่านั้นเอยฯ"
  },
  {
    "number": 28,
    "temple": "วัดระฆังโฆสิตาราม",
    "message": "ใบที่ยี่สิบแปดบอกความไปตามคิด สองสามจิตตรึกตรองทำนองหมาย ไปข้างหน้าว่าดีพาทีทาย คงสมหมายสมปองทำนองใน ภูเขาสูงน้ำลึกจงตรึกตรา สุริยาส่องแจ้งดูแสงใส คนดีอยู่เคียงข้างไม่ห่างไกล คงได้สมคิดเหมือนจิตจง แม้นใบนี้ถ้าถามเป็นความกัน อันข้อนั้นร้ายนะอย่าประสงค์ถามคนที่เจ็บช้ำในจำนง ท่านบอกตรงว่าหนักเหมือนทักทาย ถามหาลาภใบนี้ว่าดีแท้ ถามคนแน่ที่เหมาะสงเคราะห์หมาย มีอยู่ด้วยนั่งเรียงมาเคียงกาย จบทำนายพาทีเท่านี้ เอยฯ"
  }
]
// Function to upload data
const uploadFortunes = async () => {
    const collectionRef = collection(db, "fortunes");
  
    try {
      for (const fortune of fortunes) {
        await addDoc(collectionRef, fortune);
        console.log(`Uploaded fortune number: ${fortune.number}`);
      }
      console.log("All fortunes uploaded successfully!");
    } catch (error) {
      console.error("Error uploading fortunes: ", error);
    }
  };
  
  // Call the upload function
  uploadFortunes();