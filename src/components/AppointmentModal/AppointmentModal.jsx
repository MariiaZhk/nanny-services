import { useForm } from "react-hook-form";
import {
  ErrorMessage,
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
import { useState } from "react";
import { appointmentValidationSchema } from "../../utils/schemas/appointmentSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const AppointmentModal = ({ closeModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentValidationSchema),
  });
  const onSubmit = (data) => {
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
    }, 900);
    console.log(data);
  };
  return (
    <>
      <ModalTitle>Make an appointment with a babysitter</ModalTitle>
      <ModalText>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </ModalText>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <ModalInputsWrap>
          {" "}
          <ModalLabel htmlFor="address">
            <ModalInput
              {...register("address")}
              id="address"
              type="text"
              name="address"
              placeholder="Address"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Address")}
            />
            {errors.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </ModalLabel>
          <ModalLabel htmlFor="tel">
            <ModalInput
              {...register("tel")}
              id="tel"
              type="text"
              name="tel"
              placeholder="+380"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "+380")}
            />
            {errors.tel && <ErrorMessage>{errors.tel.message}</ErrorMessage>}
          </ModalLabel>
        </ModalInputsWrap>
        <ModalInputsWrap>
          <ModalLabel htmlFor="child_age">
            <ModalInput
              {...register("child_age")}
              id="child_age"
              type="text"
              name="child_age"
              placeholder="Child's age"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Child's age")}
            />
            {errors.child_age && (
              <ErrorMessage>{errors.child_age.message}</ErrorMessage>
            )}
          </ModalLabel>
          <ModalLabel htmlFor="time">
            <ModalInput
              {...register("time")}
              id="time"
              type="text"
              name="time"
              placeholder="00:00"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "00:00")}
            />
            <ModalClockBtn>
              <ModalSvg width="20px" height="20px">
                <use href={`${sprite}#icon-clock`} />
              </ModalSvg>
            </ModalClockBtn>
            {errors.time && <ErrorMessage>{errors.time.message}</ErrorMessage>}
          </ModalLabel>
        </ModalInputsWrap>
        <ModalLabel htmlFor="email">
          <ModalInput
            {...register("email")}
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ModalLabel>
        <ModalLabel htmlFor="parent_name">
          <ModalInput
            {...register("parent_name")}
            id="parent_name"
            type="text"
            name="parent_name"
            placeholder="Father's or mother's name"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Father's or mother's name")}
          />
          {errors.parent_name && (
            <ErrorMessage>{errors.parent_name.message}</ErrorMessage>
          )}
        </ModalLabel>
        <ModalLabel htmlFor="comment">
          <ModalTextarea
            {...register("comment")}
            id="comment"
            name="comment"
            placeholder="Comment"
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Comment")}
          />
          {errors.comment && (
            <ErrorMessage>{errors.comment.message}</ErrorMessage>
          )}
        </ModalLabel>

        {isSubmitted ? (
          <p>Your appointment application has been successfully submitted.</p>
        ) : (
          <ModalActionTypeBtn type="submit">Sent</ModalActionTypeBtn>
        )}
      </ModalForm>
    </>
  );
};

export default AppointmentModal;
