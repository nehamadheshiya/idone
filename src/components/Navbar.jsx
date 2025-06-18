import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../idone_assets/images/idoneLogoo.png';
import vid from '../idone_assets/videos/IDone_Herosection_Video.mp4';
import vidmob from '../idone_assets/videos/IDone_Herosection_Video_Phone.mp4';
import '../css/heroSection.css'
// import ReactPlayer from 'react-player'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolledOnMobile, setIsScrolledOnMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [companyCode, setCompanyCode] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (isMobile) {
        setIsScrolledOnMobile(scrollY > 50);
      } else {
        setIsScrolledOnMobile(false);
      }

      // 👇 Close menu on scroll
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://idone.in/Login.do?operation=doLogin';

      const inputs = [
        { name: 'txtCmpCd', value: companyCode },
        { name: 'txtLoginId', value: userId },
        { name: 'txtPassword', value: password },
      ];

      inputs.forEach(({ name, value }) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };



  const methods = [
    "Facial Recognition",
    "Fingerprint Scan",
    "Palm Vein Detection",
    "QR Code",
    "Geo Check-In"
  ];

  const paths = [
    <path d="M9.9987 16.6673C8.13759 16.6673 6.5612 16.0215 5.26953 14.7298C3.97786 13.4382 3.33203 11.8618 3.33203 10.0007C3.33203 8.13954 3.97786 6.56315 5.26953 5.27148C6.5612 3.97982 8.13759 3.33398 9.9987 3.33398C11.8598 3.33398 13.4362 3.97982 14.7279 5.27148C16.0195 6.56315 16.6654 8.13954 16.6654 10.0007C16.6654 11.8618 16.0195 13.4382 14.7279 14.7298C13.4362 16.0215 11.8598 16.6673 9.9987 16.6673ZM9.9987 15.0007C11.3876 15.0007 12.5681 14.5145 13.5404 13.5423C14.5126 12.5701 14.9987 11.3895 14.9987 10.0007C14.9987 9.76454 14.9813 9.5319 14.9466 9.30274C14.9119 9.07357 14.8598 8.84787 14.7904 8.62565C14.582 8.66732 14.3737 8.69857 14.1654 8.7194C13.957 8.74024 13.7487 8.75065 13.5404 8.75065C12.6654 8.75065 11.832 8.58399 11.0404 8.25065C10.2487 7.91732 9.54037 7.43121 8.91537 6.79232C8.52648 7.58398 7.99175 8.27148 7.3112 8.85482C6.63064 9.43815 5.85981 9.86176 4.9987 10.1257C5.04036 11.4868 5.54384 12.6395 6.50911 13.584C7.47439 14.5284 8.63759 15.0007 9.9987 15.0007ZM7.91536 11.6673C7.67925 11.6673 7.48134 11.5875 7.32161 11.4277C7.16189 11.268 7.08203 11.0701 7.08203 10.834C7.08203 10.5979 7.16189 10.4 7.32161 10.2402C7.48134 10.0805 7.67925 10.0007 7.91536 10.0007C8.15148 10.0007 8.34939 10.0805 8.50912 10.2402C8.66884 10.4 8.7487 10.5979 8.7487 10.834C8.7487 11.0701 8.66884 11.268 8.50912 11.4277C8.34939 11.5875 8.15148 11.6673 7.91536 11.6673ZM12.082 11.6673C11.8459 11.6673 11.648 11.5875 11.4883 11.4277C11.3286 11.268 11.2487 11.0701 11.2487 10.834C11.2487 10.5979 11.3286 10.4 11.4883 10.2402C11.648 10.0805 11.8459 10.0007 12.082 10.0007C12.3181 10.0007 12.5161 10.0805 12.6758 10.2402C12.8355 10.4 12.9154 10.5979 12.9154 10.834C12.9154 11.0701 12.8355 11.268 12.6758 11.4277C12.5161 11.5875 12.3181 11.6673 12.082 11.6673ZM0.832031 5.00065V2.50065C0.832031 2.04232 0.995226 1.64996 1.32161 1.32357C1.648 0.997179 2.04036 0.833984 2.4987 0.833984H4.9987V2.50065H2.4987V5.00065H0.832031ZM4.9987 19.1673H2.4987C2.04036 19.1673 1.648 19.0041 1.32161 18.6777C0.995226 18.3513 0.832031 17.959 0.832031 17.5007V15.0007H2.4987V17.5007H4.9987V19.1673ZM14.9987 19.1673V17.5007H17.4987V15.0007H19.1654V17.5007C19.1654 17.959 19.0022 18.3513 18.6758 18.6777C18.3494 19.0041 17.957 19.1673 17.4987 19.1673H14.9987ZM17.4987 5.00065V2.50065H14.9987V0.833984H17.4987C17.957 0.833984 18.3494 0.997179 18.6758 1.32357C19.0022 1.64996 19.1654 2.04232 19.1654 2.50065V5.00065H17.4987Z" fill="#F0F0F0" />,
    <path d="M10.0193 3.72917C11.4915 3.72917 12.8804 4.04514 14.1859 4.67708C15.4915 5.30903 16.5818 6.22222 17.4568 7.41667C17.554 7.54167 17.5852 7.65278 17.5505 7.75C17.5158 7.84722 17.4568 7.93056 17.3734 8C17.2901 8.06944 17.1929 8.10069 17.0818 8.09375C16.9707 8.08681 16.8734 8.02778 16.7901 7.91667C16.0262 6.83333 15.0436 6.00347 13.8422 5.42708C12.6408 4.85069 11.3665 4.5625 10.0193 4.5625C8.67205 4.5625 7.40816 4.85069 6.2276 5.42708C5.04705 6.00347 4.06788 6.83333 3.2901 7.91667C3.20677 8.04167 3.10955 8.11111 2.99844 8.125C2.88733 8.13889 2.7901 8.11111 2.70677 8.04167C2.60955 7.97222 2.55052 7.88542 2.52969 7.78125C2.50885 7.67708 2.5401 7.56944 2.62344 7.45833C3.48455 6.27778 4.56441 5.36111 5.86302 4.70833C7.16163 4.05556 8.54705 3.72917 10.0193 3.72917ZM10.0193 5.6875C11.8943 5.6875 13.5054 6.3125 14.8526 7.5625C16.1998 8.8125 16.8734 10.3611 16.8734 12.2083C16.8734 12.9028 16.6269 13.4826 16.1339 13.9479C15.6408 14.4132 15.0401 14.6458 14.3318 14.6458C13.6234 14.6458 13.0158 14.4132 12.5089 13.9479C12.0019 13.4826 11.7484 12.9028 11.7484 12.2083C11.7484 11.75 11.5783 11.3646 11.238 11.0521C10.8977 10.7396 10.4915 10.5833 10.0193 10.5833C9.54705 10.5833 9.1408 10.7396 8.80052 11.0521C8.46024 11.3646 8.2901 11.75 8.2901 12.2083C8.2901 13.5556 8.68941 14.6806 9.48802 15.5833C10.2866 16.4861 11.3179 17.1181 12.5818 17.4792C12.7068 17.5208 12.7901 17.5903 12.8318 17.6875C12.8734 17.7847 12.8804 17.8889 12.8526 18C12.8248 18.0972 12.7693 18.1806 12.6859 18.25C12.6026 18.3194 12.4984 18.3403 12.3734 18.3125C10.929 17.9514 9.74844 17.2326 8.83177 16.1563C7.9151 15.0799 7.45677 13.7639 7.45677 12.2083C7.45677 11.5139 7.70677 10.9306 8.20677 10.4583C8.70677 9.98611 9.31094 9.75 10.0193 9.75C10.7276 9.75 11.3318 9.98611 11.8318 10.4583C12.3318 10.9306 12.5818 11.5139 12.5818 12.2083C12.5818 12.6667 12.7554 13.0521 13.1026 13.3646C13.4498 13.6771 13.8595 13.8333 14.3318 13.8333C14.804 13.8333 15.2068 13.6771 15.5401 13.3646C15.8734 13.0521 16.0401 12.6667 16.0401 12.2083C16.0401 10.5972 15.4498 9.24306 14.2693 8.14583C13.0887 7.04861 11.679 6.5 10.0401 6.5C8.40122 6.5 6.99149 7.04861 5.81094 8.14583C4.63038 9.24306 4.0401 10.5903 4.0401 12.1875C4.0401 12.5208 4.07135 12.9375 4.13385 13.4375C4.19635 13.9375 4.34566 14.5208 4.58177 15.1875C4.62344 15.3125 4.61997 15.4236 4.57135 15.5208C4.52274 15.6181 4.44288 15.6875 4.33177 15.7292C4.22066 15.7708 4.11302 15.7674 4.00885 15.7187C3.90469 15.6701 3.83177 15.5903 3.7901 15.4792C3.58177 14.9375 3.43247 14.3993 3.34219 13.8646C3.25191 13.3299 3.20677 12.7778 3.20677 12.2083C3.20677 10.3611 3.87691 8.8125 5.21719 7.5625C6.55747 6.3125 8.15816 5.6875 10.0193 5.6875ZM10.0193 1.6875C10.9082 1.6875 11.7762 1.79514 12.6234 2.01042C13.4707 2.22569 14.2901 2.53472 15.0818 2.9375C15.2068 3.00694 15.2797 3.09028 15.3005 3.1875C15.3214 3.28472 15.3109 3.38194 15.2693 3.47917C15.2276 3.57639 15.1582 3.65278 15.0609 3.70833C14.9637 3.76389 14.8457 3.75694 14.7068 3.6875C13.9707 3.3125 13.2102 3.02431 12.4255 2.82292C11.6408 2.62153 10.8387 2.52083 10.0193 2.52083C9.21372 2.52083 8.42205 2.61458 7.64427 2.80208C6.86649 2.98958 6.12344 3.28472 5.4151 3.6875C5.30399 3.75694 5.19288 3.77431 5.08177 3.73958C4.97066 3.70486 4.88733 3.63194 4.83177 3.52083C4.77622 3.40972 4.76233 3.30903 4.7901 3.21875C4.81788 3.12847 4.88733 3.04861 4.99844 2.97917C5.77622 2.5625 6.58872 2.24306 7.43594 2.02083C8.28316 1.79861 9.14427 1.6875 10.0193 1.6875ZM10.0193 7.70833C11.3109 7.70833 12.422 8.14236 13.3526 9.01042C14.2832 9.87847 14.7484 10.9444 14.7484 12.2083C14.7484 12.3333 14.7102 12.434 14.6339 12.5104C14.5575 12.5868 14.4568 12.625 14.3318 12.625C14.2207 12.625 14.1234 12.5868 14.0401 12.5104C13.9568 12.434 13.9151 12.3333 13.9151 12.2083C13.9151 11.1667 13.5297 10.2951 12.7589 9.59375C11.988 8.89236 11.0748 8.54167 10.0193 8.54167C8.96372 8.54167 8.05747 8.89236 7.30052 9.59375C6.54358 10.2951 6.1651 11.1667 6.1651 12.2083C6.1651 13.3333 6.35955 14.2882 6.74844 15.0729C7.13733 15.8576 7.70677 16.6458 8.45677 17.4375C8.5401 17.5208 8.58177 17.6181 8.58177 17.7292C8.58177 17.8403 8.5401 17.9375 8.45677 18.0208C8.37344 18.1042 8.27622 18.1458 8.1651 18.1458C8.05399 18.1458 7.95677 18.1042 7.87344 18.0208C7.05399 17.1597 6.42552 16.2812 5.98802 15.3854C5.55052 14.4896 5.33177 13.4306 5.33177 12.2083C5.33177 10.9444 5.7901 9.87847 6.70677 9.01042C7.62344 8.14236 8.7276 7.70833 10.0193 7.70833ZM9.99844 11.7917C10.1234 11.7917 10.2241 11.8333 10.3005 11.9167C10.3769 12 10.4151 12.0972 10.4151 12.2083C10.4151 13.25 10.7901 14.1042 11.5401 14.7708C12.2901 15.4375 13.1651 15.7708 14.1651 15.7708C14.2484 15.7708 14.3665 15.7639 14.5193 15.75C14.6721 15.7361 14.8318 15.7153 14.9984 15.6875C15.1234 15.6597 15.2311 15.6771 15.3214 15.7396C15.4116 15.8021 15.4707 15.8958 15.4984 16.0208C15.5262 16.1319 15.5054 16.2292 15.4359 16.3125C15.3665 16.3958 15.2762 16.4514 15.1651 16.4792C14.9151 16.5486 14.6964 16.5868 14.5089 16.5938C14.3214 16.6007 14.2068 16.6042 14.1651 16.6042C12.929 16.6042 11.8561 16.1875 10.9464 15.3542C10.0366 14.5208 9.58177 13.4722 9.58177 12.2083C9.58177 12.0972 9.61997 12 9.69635 11.9167C9.77274 11.8333 9.87344 11.7917 9.99844 11.7917Z" fill="#CBCBCB" />,
    <path d="M10.4154 19.1673C8.44314 19.1673 6.76953 18.4798 5.39453 17.1048C4.01953 15.7298 3.33203 14.0562 3.33203 12.084V4.16732C3.33203 3.93121 3.41189 3.73329 3.57161 3.57357C3.73134 3.41385 3.92925 3.33398 4.16536 3.33398C4.40148 3.33398 4.59939 3.41385 4.75911 3.57357C4.91884 3.73329 4.9987 3.93121 4.9987 4.16732V9.16732H6.66536V2.50065C6.66536 2.26454 6.74523 2.06662 6.90495 1.9069C7.06467 1.74718 7.26259 1.66732 7.4987 1.66732C7.73481 1.66732 7.93273 1.74718 8.09245 1.9069C8.25217 2.06662 8.33203 2.26454 8.33203 2.50065V9.16732H9.9987V1.66732C9.9987 1.43121 10.0786 1.23329 10.2383 1.07357C10.398 0.913845 10.5959 0.833984 10.832 0.833984C11.0681 0.833984 11.2661 0.913845 11.4258 1.07357C11.5855 1.23329 11.6654 1.43121 11.6654 1.66732V9.16732H13.332V3.33398C13.332 3.09787 13.4119 2.89996 13.5716 2.74023C13.7313 2.58051 13.9293 2.50065 14.1654 2.50065C14.4015 2.50065 14.5994 2.58051 14.7591 2.74023C14.9188 2.89996 14.9987 3.09787 14.9987 3.33398V8.12565C14.5959 8.41732 14.2869 8.78537 14.0716 9.22982C13.8563 9.67426 13.7487 10.1395 13.7487 10.6257V11.6673H12.707C11.832 11.6673 11.0924 11.9694 10.4883 12.5736C9.88412 13.1777 9.58203 13.9173 9.58203 14.7923V15.834H10.832V14.7923C10.832 14.2645 11.0126 13.8201 11.3737 13.459C11.7348 13.0979 12.1793 12.9173 12.707 12.9173H14.9987V10.6257C14.9987 10.0979 15.1793 9.65343 15.5404 9.29232C15.9015 8.93121 16.3459 8.75065 16.8737 8.75065H17.4987V12.084C17.4987 14.0562 16.8112 15.7298 15.4362 17.1048C14.0612 18.4798 12.3876 19.1673 10.4154 19.1673Z" fill="#CBCBCB" />,
    <path d="M1.66797 5.83268V1.66602H5.83464V3.33268H3.33464V5.83268H1.66797ZM1.66797 18.3327V14.166H3.33464V16.666H5.83464V18.3327H1.66797ZM14.168 18.3327V16.666H16.668V14.166H18.3346V18.3327H14.168ZM16.668 5.83268V3.33268H14.168V1.66602H18.3346V5.83268H16.668ZM14.5846 14.5827H15.8346V15.8327H14.5846V14.5827ZM14.5846 12.0827H15.8346V13.3327H14.5846V12.0827ZM13.3346 13.3327H14.5846V14.5827H13.3346V13.3327ZM12.0846 14.5827H13.3346V15.8327H12.0846V14.5827ZM10.8346 13.3327H12.0846V14.5827H10.8346V13.3327ZM13.3346 10.8327H14.5846V12.0827H13.3346V10.8327ZM12.0846 12.0827H13.3346V13.3327H12.0846V12.0827ZM10.8346 10.8327H12.0846V12.0827H10.8346V10.8327ZM15.8346 4.16602V9.16602H10.8346V4.16602H15.8346ZM9.16797 10.8327V15.8327H4.16797V10.8327H9.16797ZM9.16797 4.16602V9.16602H4.16797V4.16602H9.16797ZM7.91797 14.5827V12.0827H5.41797V14.5827H7.91797ZM7.91797 7.91602V5.41602H5.41797V7.91602H7.91797ZM14.5846 7.91602V5.41602H12.0846V7.91602H14.5846Z" fill="#CBCBCB" />,
    <path d="M9.9987 9.99935C10.457 9.99935 10.8494 9.83615 11.1758 9.50977C11.5022 9.18338 11.6654 8.79102 11.6654 8.33268C11.6654 7.87435 11.5022 7.48199 11.1758 7.1556C10.8494 6.82921 10.457 6.66602 9.9987 6.66602C9.54036 6.66602 9.148 6.82921 8.82161 7.1556C8.49523 7.48199 8.33203 7.87435 8.33203 8.33268C8.33203 8.79102 8.49523 9.18338 8.82161 9.50977C9.148 9.83615 9.54036 9.99935 9.9987 9.99935ZM9.9987 18.3327C7.76259 16.4299 6.09245 14.6625 4.98828 13.0306C3.88411 11.3987 3.33203 9.88824 3.33203 8.49935C3.33203 6.41602 4.00217 4.75629 5.34245 3.52018C6.68273 2.28407 8.23481 1.66602 9.9987 1.66602C11.7626 1.66602 13.3147 2.28407 14.6549 3.52018C15.9952 4.75629 16.6654 6.41602 16.6654 8.49935C16.6654 9.88824 16.1133 11.3987 15.0091 13.0306C13.9049 14.6625 12.2348 16.4299 9.9987 18.3327Z" fill="#CBCBCB" />
  ]

  const durations = [6000, 6000, 4250, 6050, 6250];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % methods.length);
    }, durations[activeIndex]);

    return () => clearTimeout(timeout);
  }, [activeIndex, methods.length]);


  return (<>
    <div className="hero-container font-[poppins]">
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-xl w-full lg:max-w-[25%] md:max-w-[80%] mx-4 shadow-xl relative">

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-black"
              onClick={() => setShowLoginModal(false)}
            >
              &times;
            </button>


            <h2 className="text-center text-black mb-1 font-[poppins] font-medium text-xl">Welcome Back</h2>
            <p className="text-sm text-center text-gray-500 mb-8 font-normal">Sign in to access your dashboard</p>


            <form className="space-y-4" onSubmit={handleLogin}>

              {/* Company Code */}
              <div>
                <label className="block text-sm font-normal font-[poppins] text-[#434343] mb-1">Company Code</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <mask id="mask0_1616_879" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1616_879)">
                        <path d="M1.33203 14V2H7.9987V4.66667H14.6654V14H1.33203ZM2.66536 12.6667H6.66536V11.3333H2.66536V12.6667ZM2.66536 10H6.66536V8.66667H2.66536V10ZM2.66536 7.33333H6.66536V6H2.66536V7.33333ZM2.66536 4.66667H6.66536V3.33333H2.66536V4.66667ZM7.9987 12.6667H13.332V6H7.9987V12.6667ZM9.33203 8.66667V7.33333H11.9987V8.66667H9.33203ZM9.33203 11.3333V10H11.9987V11.3333H9.33203Z" fill="#9A9A9A" />
                      </g>
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={companyCode}
                    onChange={(e) => setCompanyCode(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm text-black"
                    placeholder="Enter Company Code"
                    required
                  />
                </div>
              </div>

              {/* User ID */}
              <div>
                <label className="block text-sm font-normal font-[poppins] text-[#434343] mb-1">User ID</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <mask id="mask0_1616_5218" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1616_5218)">
                        <path d="M8.0013 7.99935C7.26797 7.99935 6.64019 7.73824 6.11797 7.21602C5.59575 6.69379 5.33464 6.06602 5.33464 5.33268C5.33464 4.59935 5.59575 3.97157 6.11797 3.44935C6.64019 2.92713 7.26797 2.66602 8.0013 2.66602C8.73463 2.66602 9.36241 2.92713 9.88463 3.44935C10.4069 3.97157 10.668 4.59935 10.668 5.33268C10.668 6.06602 10.4069 6.69379 9.88463 7.21602C9.36241 7.73824 8.73463 7.99935 8.0013 7.99935ZM2.66797 13.3327V11.466C2.66797 11.0882 2.76519 10.741 2.95964 10.4243C3.15408 10.1077 3.41241 9.86602 3.73464 9.69935C4.42352 9.3549 5.12352 9.09657 5.83464 8.92435C6.54575 8.75213 7.26797 8.66602 8.0013 8.66602C8.73463 8.66602 9.45686 8.75213 10.168 8.92435C10.8791 9.09657 11.5791 9.3549 12.268 9.69935C12.5902 9.86602 12.8485 10.1077 13.043 10.4243C13.2374 10.741 13.3346 11.0882 13.3346 11.466V13.3327H2.66797ZM4.0013 11.9993H12.0013V11.466C12.0013 11.3438 11.9707 11.2327 11.9096 11.1327C11.8485 11.0327 11.768 10.9549 11.668 10.8993C11.068 10.5993 10.4624 10.3743 9.8513 10.2243C9.24019 10.0743 8.62352 9.99935 8.0013 9.99935C7.37908 9.99935 6.76241 10.0743 6.1513 10.2243C5.54019 10.3743 4.93464 10.5993 4.33464 10.8993C4.23464 10.9549 4.15408 11.0327 4.09297 11.1327C4.03186 11.2327 4.0013 11.3438 4.0013 11.466V11.9993ZM8.0013 6.66602C8.36797 6.66602 8.68186 6.53546 8.94297 6.27435C9.20408 6.01324 9.33463 5.69935 9.33463 5.33268C9.33463 4.96602 9.20408 4.65213 8.94297 4.39102C8.68186 4.1299 8.36797 3.99935 8.0013 3.99935C7.63463 3.99935 7.32075 4.1299 7.05964 4.39102C6.79852 4.65213 6.66797 4.96602 6.66797 5.33268C6.66797 5.69935 6.79852 6.01324 7.05964 6.27435C7.32075 6.53546 7.63463 6.66602 8.0013 6.66602Z" fill="#878787" />
                      </g>
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm text-black"
                    placeholder="Enter User ID"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-normal font-[poppins] text-[#434343] mb-1">Password</label>
                <div className="relative">
                  {/* Left icon */}
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <mask id="mask0_1616_4373" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                        <rect width="16" height="16" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1616_4373)">
                        <path d="M4.0013 14.666C3.63464 14.666 3.32075 14.5355 3.05964 14.2743C2.79852 14.0132 2.66797 13.6993 2.66797 13.3327V6.66602C2.66797 6.29935 2.79852 5.98546 3.05964 5.72435C3.32075 5.46324 3.63464 5.33268 4.0013 5.33268H4.66797V3.99935C4.66797 3.07713 4.99297 2.29102 5.64297 1.64102C6.29297 0.991016 7.07908 0.666016 8.0013 0.666016C8.92352 0.666016 9.70964 0.991016 10.3596 1.64102C11.0096 2.29102 11.3346 3.07713 11.3346 3.99935V5.33268H12.0013C12.368 5.33268 12.6819 5.46324 12.943 5.72435C13.2041 5.98546 13.3346 6.29935 13.3346 6.66602V13.3327C13.3346 13.6993 13.2041 14.0132 12.943 14.2743C12.6819 14.5355 12.368 14.666 12.0013 14.666H4.0013ZM4.0013 13.3327H12.0013V6.66602H4.0013V13.3327ZM8.0013 11.3327C8.36797 11.3327 8.68186 11.2021 8.94297 10.941C9.20408 10.6799 9.33463 10.366 9.33463 9.99935C9.33463 9.63268 9.20408 9.31879 8.94297 9.05768C8.68186 8.79657 8.36797 8.66602 8.0013 8.66602C7.63463 8.66602 7.32075 8.79657 7.05964 9.05768C6.79852 9.31879 6.66797 9.63268 6.66797 9.99935C6.66797 10.366 6.79852 10.6799 7.05964 10.941C7.32075 11.2021 7.63463 11.3327 8.0013 11.3327ZM6.0013 5.33268H10.0013V3.99935C10.0013 3.44379 9.80686 2.97157 9.41797 2.58268C9.02908 2.19379 8.55686 1.99935 8.0013 1.99935C7.44575 1.99935 6.97352 2.19379 6.58464 2.58268C6.19575 2.97157 6.0013 3.44379 6.0013 3.99935V5.33268Z" fill="#9A9A9A" />
                      </g>
                    </svg>
                  </span>

                  {/* Input */}
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded text-sm text-black"
                    placeholder="Enter Password"
                    required
                  />

                  {/* Right toggle icon */}
                  <span
                    className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? (
                      // Eye-off icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.422-3.718M9.88 9.88A3 3 0 0112 15c.454 0 .88-.102 1.267-.285m-1.762-4.657a3 3 0 013.404 3.404M6.1 6.1l11.8 11.8" />
                      </svg>
                    ) : (
                      // Eye icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>


              {/* Error message */}
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-[poppins] 
                          font-normal py-3 rounded hover:from-blue-600 hover:to-blue-800 transition mt-4"
              >
                {loading ? 'Logging in...' : 'Sign In '}
              </button>

              {/* Demo access */}
              {/* <button
                type="button"
                className="w-full mt-2 text-xs font-medium text-[#4B4B4B] font-[poppins] hover:underline rounded-[4px] border border-[#D9D9D9] "
                onClick={() => alert('Demo access coming soon!')}
              >
                Quick Demo Access
              </button> */}

              {/* Help link */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Need help? <a href="#booknow" className="text-blue-500 hover:underline" onClick={() => setShowLoginModal(false)}>Contact Support</a>
              </p>
            </form>
          </div>
        </div>
      )}



      <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
        <div className="navbar-inner">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#industrycards">Industries</a>
            <a href="#weserve">About Us</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div className="nav-actions ">
            <button className='cursor-pointer' onClick={() => setShowLoginModal(true)}>Login</button>
            <a href="#booknow">
              <button className="demo-button font-[poppins]">Book Demo</button>
            </a>
          </div>


          <div className="nav-actions-mobile">
            <a
              onClick={() => setShowLoginModal(true)}
              className={`transition-colors duration-10 ${isScrolledOnMobile ? 'text-black' : 'text-white'
                }`}
            >
              Login
            </a>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X
              size={24}
              className={`menux transition-colors duration-300 ${isScrolledOnMobile ? 'text-black' : 'text-white'
                }`}
            />
              : <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask id="mask0_1297_3113" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1297_3113)">
                  <path
                    d="M7.5 15V13.3333H17.5V15H7.5ZM7.5 10.8333V9.16667H17.5V10.8333H7.5ZM2.5 6.66667V5H17.5V6.66667H2.5Z"
                    fill={isScrolledOnMobile ? "#1C1B1F" : "#FFFFFF"}
                  />
                </g>
              </svg>
            }
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu text-sm font-['poppins]">
            <a href="#">Features</a>
            <a href="#">Industries</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
          </div>
        )}
      </nav>

      <section className="hero-text">
        <div className="hero-content ">
          <h1 className="hero-title">
            Smarter HR.<br />Seamless Attendance.
          </h1>
          <p className="hero-subtitle font-[poppins] font-normal">
            Save hours on routine tasks, payroll errors, and leave requests with real-time attendance and workforce automation.
          </p>
          <a href='#booknow'><button className="hero-button font-[poppins] text-sm font-medium">Book Demo</button></a>
        </div>

        <div className="method-buttons">
          {methods.map((label, index) => (
            <button
              key={index}
              className={`method-button ${activeIndex === index ? 'active' : ''}`}
            // onClick={() => setActiveIndex(index)}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <mask id={`mask_${index}`} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask={`url(#mask_${index})`}>
                    {paths[index]}
                  </g>
                </svg>
              </span>
              {label}
            </button>
          ))}
        </div>

      </section>

      <section className="hero-video-wrapper">

        <video className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>

  </>);
}
