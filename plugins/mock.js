import Mock from "mockjs"



// 首页 start
// Mock.mock(/v1\/goods\/category\/card/,"get",params=>{
//   const list = Mock.mock({
//     "list|4":[{
//       "name":"@cname"
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/goods\/category\/news/,"get",params=>{
//   const list = Mock.mock({
//     "list|7":[{
//       "name":"@cname"
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/goods\/category\/search/,"get",params=>{
//   const list = Mock.mock({
//     "list|6":[{
//       "id|+1":1,
//       "name":"@ctitle(4)",
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/goods\/news/,"get",params=>{
//   const list = Mock.mock({
//     "list|6":[{
//       "id|+1":1,
//       "title":"@ctitle(5)",
//       "price|50-200":50,
//       "visit_count|500-10000":500,
//       "is_cart":0.,
//       "is_like":0
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/news\/hots/,"get",params=>{
//   const list = Mock.mock({
//     "list|6":[{
//       "id|+1":1,
//       "title":"@ctitle(6)",
//       "intro":"@ctitle(30)",
//       "created_at":Mock.mock("@datetime('yyyy-MM-dd HH:mm:ss')")
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/goods\/hots/,"get",params=>{
//   const list = Mock.mock({
//     "list|6":[{
//       "id|+1":1,
//       "title":"@ctitle(5)",
//       "price|50-200":50,
//       "visit_count|500-10000":500,
//       "is_cart":0.,
//       "is_like":0
//     }]
//   })
//   return list.list
// })
// // 首页 end

// //////////////
// ///  搜索  ///
// /////////////
// Mock.mock(/v1\/goods\/tags/,"get",params=>{
//   const list = Mock.mock({
//     "list|4":[{
//       "id|+1":1,
//       "name":"@ctitle(3)",
//       "spu_count|50-500":50,
//     }]
//   })
//   return list.list
// })
// Mock.mock(/v1\/goods\/category/,"get",params=>{
//   const list = Mock.mock({
//     "list|4":[{
//       "id|+1":1,
//       "name":"@ctitle(3)",
//       "children|5":[{
//         "id|+1":1,
//         "name":"@ctitle(3)"
//       }],
//     }]
//   })
//   return list.list
// })
//////////////
///  搜索  ///
/////////////




//////////////
///  新闻  ///
/////////////
// Mock.mock(/v1\/news/,"get",params=>{
//   const list = Mock.mock({
//     "list|12":[{
//       "id|+1":1,
//       "title":"@ctitle(3)",
//       "intro":"@ctitle(30)",
//       "created_at":Mock.mock("@datetime('yyyy-MM-dd HH:mm:ss')")
//     }]
//   })
//   return {
//     lists:list.list,
//     page:1,
//     per_page:12,
//     total_count:78

//   }
// })
// Mock.mock(/v1\/pricing/,"get",params=>{
//   const list = Mock.mock({
//     "list|3":[{
//       "id|+1":1,
//       "title":"@ctitle(3)",
//       "describes":"@ctitle(30)",
//       "price|198-399":198,
//       "rights|4":[
//         "@ctitle(12)"
//       ]
//     }]
//   })
//   return list.list
// })
//////////////
///  新闻  ///
/////////////


  
// Mock.mock(/v1\/sms\/login\/verify/,{
//     "data|100": [ //生成100条数据 数组
//         {
//             "shopId|+1": 1,//生成商品id，自增1
//             "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
//             "shopName": "@cname",//生成商品名 ， 都是中国人的名字
//             "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
//             "shopAddress": "@county(true)", //随机生成地址
//             "shopStar|1-5": "★", //随机生成1-5个星星
//             "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
//             "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
//             "food|7": [ //每个商品中再随机生成七个food
//                 {
//                     "foodName": "@cname", //food的名字
//                     "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
//                     "foodPrice|1-100": 20,//生成1-100的随机数
//                     "aname|14": [
//                         { 
//                             "aname": "@cname", 
//                             "aprice|30-60": 20 
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// })