import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputMask from "@kerim-keskin/react-input-mask";
import * as Yup from "yup";

import Button from "../Button";

import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { remove, close, clear as clearCart } from "../../store/reducers/cart";
import { formatPrices } from "../Modal";

import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  CartItem,
  Title,
  InputGroup,
  DoubleInputGroup,
  DeliveryButtons,
  Message,
} from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [cart, setCart] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const [payment, setPayment] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [purchase, { data }] = usePurchaseMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeCart = () => dispatch(close());
  const removeItem = (index: number) => dispatch(remove(index));

  const getTotalPrices = () => items.reduce((a, value) => a + value.preco!, 0);

  const form = useFormik({
    initialValues: {
      products: [],
      receiver: "",
      addressDescription: "",
      addressCity: "",
      addressZipCode: "",
      addressNumber: "",
      addressComplement: "",
      cardDisplayName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .required("O campo é obrigatorio")
        .test("full-name", "Digite o nome completo com sobrenome", (value) => {
          if (!value) return false;
          return value.trim().split(" ").length >= 2;
        }),
      addressDescription: Yup.string().required("O campo é obrigatorio"),
      addressCity: Yup.string().required("O campo é obrigatorio"),
      addressZipCode: Yup.string().required("O campo é obrigatorio"),
      addressNumber: Yup.string().required("O campo é obrigatorio"),
      addressComplement: Yup.string(),
      cardDisplayName: Yup.string().required("O campo é obrigatorio"),
      cardNumber: Yup.string().required("O campo é obrigatorio"),
      cardCode: Yup.string().required("O campo é obrigatorio"),
      expiresMonth: Yup.string()
        .required("O campo é obrigatorio")
        .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido"),
      expiresYear: Yup.string()
        .required("O campo é obrigatorio")
        .test("year-min", "Ano inválido", (value) => {
          if (!value) return false;
          const numericYear = Number(value);
          return numericYear >= new Date().getFullYear();
        }),
    }),
    onSubmit: async (values) => {
      try {
        await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number,
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.addressDescription,
              city: values.addressCity,
              zipCode: values.addressZipCode,
              number: Number(values.addressNumber),
              complement: values.addressComplement,
            },
          },
          payment: {
            card: {
              name: values.cardDisplayName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
        }).unwrap();

        setPayment(false);
        setOrderCompleted(true);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isChanged = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isChanged && isInvalid;

    return hasError;
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <form onSubmit={form.handleSubmit}>
        {cart && (
          <Sidebar>
            {items.length === 0 ? (
              <Title>Nenhum item no carrinho</Title>
            ) : (
              <>
                <ul>
                  {items.map((item, index) => (
                    <CartItem key={`${item.id}-${index}`}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{formatPrices(item.preco)}</span>
                      </div>
                      <button type="button" onClick={() => removeItem(index)} />
                    </CartItem>
                  ))}
                </ul>
                <Prices>
                  Valor total
                  <span> {formatPrices(getTotalPrices())}</span>
                </Prices>
                <Button
                  buttonFor="formFinish"
                  text="Continuar com a entrega"
                  type="button"
                  onClick={() => {
                    if (items.length > 0) {
                      setDelivery(true);
                      setCart(false);
                    }
                  }}
                />
              </>
            )}
          </Sidebar>
        )}

        {delivery && (
          <Sidebar>
            <Title>Entrega</Title>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                className={checkInputHasError("receiver") ? "error" : ""}
                id="receiver"
                type="text"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Nome Sobrenome"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="addressDescription">Endereço</label>
              <input
                className={
                  checkInputHasError("addressDescription") ? "error" : ""
                }
                id="addressDescription"
                type="text"
                name="addressDescription"
                value={form.values.addressDescription}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Endereço de entrega"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="addressCity">Cidade</label>
              <input
                className={checkInputHasError("addressCity") ? "error" : ""}
                id="addressCity"
                type="text"
                name="addressCity"
                value={form.values.addressCity}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Salvador"
              />
            </InputGroup>
            <DoubleInputGroup>
              <InputGroup>
                <label htmlFor="addressZipCode">CEP</label>
                <InputMask
                  className={
                    checkInputHasError("addressZipCode") ? "error" : ""
                  }
                  id="addressZipCode"
                  type="text"
                  name="addressZipCode"
                  value={form.values.addressZipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99.999-999"
                  placeholder="00.000-000"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="addressNumber">Número</label>
                <InputMask
                  className={checkInputHasError("addressNumber") ? "error" : ""}
                  id="addressNumber"
                  type="text"
                  name="addressNumber"
                  value={form.values.addressNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                  placeholder="00"
                />
              </InputGroup>
            </DoubleInputGroup>

            <InputGroup>
              <label htmlFor="addressComplement">Complemento (opcional)</label>
              <input
                className={
                  checkInputHasError("addressComplement") ? "error" : ""
                }
                id="addressComplement"
                type="text"
                name="addressComplement"
                value={form.values.addressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Continuar com o pagamento"
                type="button"
                onClick={async () => {
                  const errors = await form.validateForm();
                  if (
                    !errors.receiver &&
                    !errors.addressDescription &&
                    !errors.addressCity &&
                    !errors.addressZipCode &&
                    !errors.addressNumber
                  ) {
                    setDelivery(false);
                    setPayment(true);
                  } else {
                    form.setTouched({
                      receiver: true,
                      addressDescription: true,
                      addressCity: true,
                      addressZipCode: true,
                      addressNumber: true,
                      addressComplement: true,
                    });
                  }
                }}
              />
              <Button
                buttonFor="formFinish"
                text="Voltar para o carrinho"
                type="button"
                onClick={() => {
                  setDelivery(false);
                  setCart(true);
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}

        {payment && (
          <Sidebar>
            <Title>
              Pagamento - Valor a pagar {formatPrices(getTotalPrices())}
            </Title>
            <InputGroup>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                className={checkInputHasError("cardDisplayName") ? "error" : ""}
                id="cardDisplayName"
                type="text"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Patolino da Silva"
              />
            </InputGroup>
            <DoubleInputGroup>
              <InputGroup className="flex-grow--2">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  className={checkInputHasError("cardNumber") ? "error" : ""}
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999 9999 9999 9999"
                  placeholder="0000 0000 0000 0000"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  className={checkInputHasError("cardCode") ? "error" : ""}
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="999"
                  placeholder="000"
                />
              </InputGroup>
            </DoubleInputGroup>
            <DoubleInputGroup>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  className={checkInputHasError("expiresMonth") ? "error" : ""}
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99"
                  placeholder="00"
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  className={checkInputHasError("expiresYear") ? "error" : ""}
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="9999"
                  placeholder="0000"
                />
              </InputGroup>
            </DoubleInputGroup>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Finalizar pagamento"
                type="submit"
              />
              <Button
                buttonFor="formFinish"
                text="Voltar para edição de endereço"
                type="button"
                onClick={() => {
                  setDelivery(true);
                  setPayment(false);
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}

        {orderCompleted && (
          <Sidebar>
            <Title>Pedido realizado - {data && data.orderId}</Title>
            <Message>
              <span>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </span>
              <span>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </span>
              <span>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </span>
              <span>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </span>
            </Message>
            <DeliveryButtons>
              <Button
                buttonFor="formFinish"
                text="Concluir"
                type="button"
                onClick={() => {
                  form.handleSubmit();
                  setCart(false);
                  setDelivery(false);
                  setPayment(false);
                  setOrderCompleted(false);
                  closeCart();
                  dispatch(clearCart());
                  form.resetForm();
                  navigate("/");
                }}
              />
            </DeliveryButtons>
          </Sidebar>
        )}
      </form>
    </CartContainer>
  );
};

export default Cart;
