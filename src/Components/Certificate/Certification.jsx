import React from "react";
import Cards from "./Cards";
export default function Certification() {
  const cardDataArray = [
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/5_5a69656f-38f8-4dec-a72c-e85f2d6564e4_640x426.png?v=1697543090',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/diploma_full-2_245f1bdd-68c7-4998-aa04-0e92b5f0b23f_725x512.png?v=1697368177',
      oldPrice: '$1465.00',
      newPrice: '$695.99',
      subtitle: 'W3Schools Full Access',
      enrollNowText: 'Enroll Now',
      PaymentLinked:'https://buy.stripe.com/test_8wMbLEaSG7xi4CceUW'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/1_34bfcd36-f1d8-4230-be17-ebc9bce5cfd7_640x426.png?v=1697542820',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/modernwebdev_355x274.png?v=1697200900',
      oldPrice: '$470.00',
      newPrice: '$295.00',
      subtitle: 'Learn Modern Web Development',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_28o5ng1i62cY9Ww6os'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/FrontEndDevelopment_1_640x426.png?v=1697544663',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/certificate-of-completion-web-application-development-preview_346x275.png?v=1681910695',
      oldPrice: '$470.00',
      newPrice: '$295.00',
      subtitle: 'Learn Web Application Development',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_9AQeXQe4S7xi0lW28d'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/4_24a05961-0154-46e5-ae14-f9260bcf382e_640x426.png?v=1697543050',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Screenshot2022-07-13at14.03.01_348x275.png?v=1681910436',
      oldPrice: '$345.00',
      newPrice: '$190.00',
      subtitle: 'Learn Data Analytics',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_6oE3f8f8W4l66Kk28e'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/2_c837b25e-68a6-4657-b16f-c72b359266cf_640x426.png?v=1697542960',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/FB_frontend_img_1080x720_31e46a9e-e124-4db2-8978-2084704e0c75_412x275.png?v=1681910497',
      oldPrice: '$285.00',
      newPrice: '$190.00',
      subtitle: 'Learn Front end Development',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_28o2b46CqdVGgkU3cj'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/3_f57bbce2-9e3e-4b4c-a22b-750baed813a6_640x426.png?v=1697543002',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/web-design-certificate-of-completion-preview_348x275.png?v=1681910744',
      oldPrice: '$235.00',
      newPrice: '$140.00',
      subtitle: 'Learn Web Design',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_00gaHAbWKdVGb0AfZ6'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/15_78fce456-3fdb-48be-beb9-4dfc78df39b2_640x426.png?v=1697543666',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_b4_5c68979d-bc84-4975-957c-6d2b3d1037a3_348x275.png?v=1683098883',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn Bootstrap 4',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_9AQdTMf8W8Bm7OodQZ'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/18_640x426.png?v=1697543777',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/react_cert_348x275.png?v=1683099324',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn React.js',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_9AQ1704uicRCecMeV4'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/17_79e898ec-7a36-4ef1-a863-31de9f2895d4_640x426.png?v=1697543751',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_java_d0f2f811-f1b9-4a33-b1ff-170923efb434_348x275.png?v=1683098928',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn Java',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_cN27vo9OC4l67Oo28j'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/16_640x426.png?v=1697543691',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/certificate-of-completion-xml-preview_346x275.png?v=1683099569',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn XML',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_7sIaHA1i64l65Gg00c'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/14_9b85cc95-5c14-49f4-a9c0-25ca4a92d1d2_640x426.png?v=1697543633',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_b3_38722362-125a-4996-b881-95ef516de82a_348x275.png?v=1683098861',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn Bootstrap 3',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_eVabLEf8WdVGgkUbIV'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/13_54b70eff-01f7-449a-becd-7b93999342fa_640x426.png?v=1697543493',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_php_c30a076c-30c3-4170-bc8b-00e0abd42e25_348x275.png?v=1683099054',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn PHP',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_14k2b47Gu3h27Oo4gu'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/12_694f2b55-a316-410b-9dbe-e58cc40d25a1_640x426.png?v=1697543430',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/sql-certificate-of-completion-preview_346x275.png?v=1681910655',
      oldPrice: '',
      newPrice: '$95.00',
      subtitle: 'Learn SQL',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_4gwg1U2ma8Bm5GgcN1'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/11_a18d1e13-21a5-41e4-81ed-d1f2c3452d16_640x426.png?v=1697543406',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_jquery_c689a5c4-727b-4263-a142-255d89891b68_348x275.png?v=1683098954',
      oldPrice: ' ',
      newPrice: '$95.00',
      subtitle: 'Learn jQuery',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_dR602W5ym5pagkUaEU'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/10_c25830cc-3e0e-4d60-8c7e-760e7eee117d_640x426.png?v=1697543340',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_python_4f7d8da5-12d3-4969-98c2-501ce9237646_348x275.png?v=1681915916',
      oldPrice: ' ',
      newPrice: '$95.00',
      subtitle: 'Learn Python',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_9AQ6rkd0Og3O7Oo7sJ'
    },
    {
      displayImage: 'https://campus.w3schools.com/cdn/shop/files/7_a702ad6b-e93a-46ab-b1af-2bf06dc7dd3b_640x426.png?v=1697543160',
      hoverImage: 'https://campus.w3schools.com/cdn/shop/products/Cert_python_4f7d8da5-12d3-4969-98c2-501ce9237646_348x275.png?v=1681915916',
      oldPrice: ' ',
      newPrice: '$0.00',
      subtitle: 'Learn HTML',
      enrollNowText: 'Enroll Now',
       PaymentLinked:'https://buy.stripe.com/test_dR67vobWKg3O6Kk28b'
    },
  ];

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
        {cardDataArray.map((cardData, index) => (
          <Cards key={index} {...cardData} />
        ))}
      </div>
    </div>
    </>
  );
}
