import ContentWrapper from "../components/ContentWrapper";

const Footer = () => {
  return (
    <footer className="p-4 bg-base-300 w-full flex items-center justify-between text-center bg-black h-[20vh] mt-10">
      <ContentWrapper>
        <aside>
          <p className="text-base font-medium xl:text-xl">
            Copyright © 2023 - All right reserved by{" "}
            <a
              className="text-purple-800 font-bold capitalize hover:underline"
              href="https://github.com/iamjabeed"
              target="_blank"
            >
              Jabeed
            </a>
          </p>
        </aside>
      </ContentWrapper>
    </footer>
  );
};
export default Footer;
