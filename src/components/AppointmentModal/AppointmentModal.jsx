import { useForm } from "react-hook-form";
import {
  ModalActionTypeBtn,
  ModalClockBtn,
  ModalForm,
  ModalInput,
  ModalInputsWrap,
  ModalLabel,
  ModalSvg,
  ModalText,
  ModalTextarea,
  ModalTitle,
} from "../Modal/Modal.styled";
import sprite from "../../assets/sprite.svg";

const AppointmentModal = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <ModalTitle>Make an appointment with a babysitter</ModalTitle>
      <ModalText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </ModalText>
      <ModalForm>
        <ModalInputsWrap>
          {" "}
          <ModalLabel>
            <ModalInput
              {...register("address")}
              type="text"
              placeholder="Address"
              name="address"
            />
          </ModalLabel>
          <ModalLabel>
            <ModalInput
              {...register("tel")}
              type="text"
              placeholder="+380"
              name="tel"
            />
          </ModalLabel>
        </ModalInputsWrap>
        <ModalInputsWrap>
          <ModalLabel>
            <ModalInput
              {...register("child")}
              type="text"
              placeholder="Child's age"
              name="child"
            />
          </ModalLabel>
          <ModalLabel>
            <ModalInput
              {...register("time")}
              type="text"
              placeholder="00:00"
              name="time"
            />
            <ModalClockBtn>
              <ModalSvg width="20px" height="20px">
                <use href={`${sprite}#icon-clock`} />
              </ModalSvg>
            </ModalClockBtn>
          </ModalLabel>
        </ModalInputsWrap>
        <ModalLabel>
          <ModalInput
            {...register("email")}
            type="text"
            placeholder="Email"
            name="email"
          />
        </ModalLabel>
        <ModalLabel>
          <ModalInput
            {...register("parents")}
            type="text"
            placeholder="Father's or mother's name"
            name="parents"
          />
        </ModalLabel>
        <ModalLabel>
          <ModalTextarea
            {...register("comment")}
            placeholder="Comment"
            name="comment"
          />
        </ModalLabel>
        <ModalActionTypeBtn type="submit">Send</ModalActionTypeBtn>
      </ModalForm>
    </>
  );
};

export default AppointmentModal;
