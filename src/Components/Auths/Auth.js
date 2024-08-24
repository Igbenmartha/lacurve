import styled from 'styled-components';

export const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(src/assets/backy.jpg);
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    height: 100vh;
    padding: 10px;
    background: white;
    background-position: center;
  }
`;

export const MaininnerWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(rgb(11, 119, 11), rgb(56, 221, 92, 223)), url();

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const Mainwrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const SignUpForm = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    height:auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    height:100vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

export const SignUpWrapper = styled.form`
  width: 70%;
  height: 70%;
  background: rgba(128, 128, 128, 0.445);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
  }
`;

export const CreateAcct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 30px;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 35px;
  background: ${({ Bg }) => (Bg ? "#f5c2a5" : "#ffc8a3")};
  border: ${({ Bg }) => (Bg ? "none" : "1px solid rgba(128, 128, 128, 0.452)")};
  color: ${({ Bg }) => (Bg ? "white" : "")};
  font-size: 15px;
  font-weight: 550;

  &:hover {
    cursor: pointer;
    background-color: green;
  }

  @media (max-width: 900px) {
    height: 40px;
    font-size: 14px;
    margin-top: 0%;
  }
  @media (max-width: 768px) {
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 30px;
    font-size: 13px;
    margin:0%;
  }
`;

export const Or = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 12%;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 5px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid green;

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 30px;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid green;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: white;

  @media (max-width: 768px) {
    height: 50px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    height: 30px;
    gap: 5px;
  }
`;

export const Input = styled.input`
  width: ${({ width }) => (width ? "90%" : "100%")};
  height: ${({ height }) => (height ? '30px' : '40px')};
  padding: 10px;
  background-color: linear-gradient(to left, #ffc8a3, #ff9448);
  border: ${({ border }) => (border ? 'none' : '1px solid green')};
  outline: ${({ outline }) => (outline ? 'none' : 'green')};

  @media (max-width: 768px) {
    height: ${({ height }) => (height ? '30px' : '50px')};
    padding: 8px;
  }

  @media (max-width: 480px) {
    height: ${({ height }) => (height ? '20px' : '30px')};
    padding: 5px;
  }
`;

export const Label = styled.label`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  span {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      transition: all 350ms ease-in-out;
      color: red;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
  }

  @media (max-width: 480px) {
    gap: 3px;
  }
`;

export const Hr = styled.hr`
  height: 1px;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const PasswordCheck = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
