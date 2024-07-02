import React from 'react'
import { PlusIcon } from '@renderer/components/Icons/PlusIcon'
import {
  Modal,
  Input,
  Button,
  Select,
  ModalBody,
  SelectItem,
  ModalFooter,
  ModalHeader,
  ModalContent,
  useDisclosure,
  Textarea,
} from '@nextui-org/react'
import { BiDollar } from 'react-icons/bi'
import { Checkbox } from '@nextui-org/react'
import './ProductAdd.scss'

export const AddSupplierModal = ({ modal }) => {
  const [data, setData] = React.useState<any>({
    name: '',
    description: null,
    phone: null,
    email: null,
    website: null,
    supplierType: null,
    reasonSocial: null,
    address: null, // default value
    dni: null,
    saleCondition: null,
    businessUnit: {
      id: 6,
      name: 'Main Unit',
    },
  })

  const [errors, setErrors] = React.useState({
    name: '',
  })
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data)
    handleValidation(e.target.name, e.target.value)
  }

  const handleValidation = (name, value) => {
    let newErrors = { ...errors }

    switch (name) {
      case 'name':
        if (!validateName(value)) {
          newErrors.name = 'Por favor, ingresa un nombre válido.'
        } else {
          newErrors.name = ''
        }
        break
      default:
        break
    }

    setErrors(newErrors)
  }

  const handleSubmit = () => {
    let valid = true
    const newErrors = {
      name: '',
    }

    if (!validateName(data.name)) {
      newErrors.name = 'Por favor, ingresa un nombre válido.'
      valid = false
    }

    setErrors(newErrors)
    if (!valid) {
      return
    }
    modal.action(data)
    setData({
      name: '',
      description: null,
      phone: null,
      email: null,
      website: null,
      supplierType: null,
      reasonSocial: null,
      address: null, // default value
      dni: null,
      saleCondition: null,
      businessUnit: {
        id: 6,
        name: 'Main Unit',
      },
    })
    onClose()
  }
  const validateName = (name) => {
    if (!name.trim()) {
      return false // Nombre está vacío
    }
    return true // Nombre no está vacío
  }
  return (
    <div className='flex flex-col gap-2'>
      <Button onPress={onOpen} className='bg-c-primary' color='secondary' endContent={<PlusIcon />}>
        {modal?.buttonTitle}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='5xl'
        scrollBehavior={'inside'}
        backdrop='blur'
        className='bg-c-card'
      >
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>
            <h3 className='text-c-title'>{modal?.title}</h3>
          </ModalHeader>
          <ModalBody>
            <div className='productsmodaladd w-full flex flex-col gap-3  '>
              <div className='rowmodaladdproduct justify-start items-start flex gap-3'>
                <Input
                  name='name'
                  label='Nombre'
                  isRequired
                  size='sm'
                  labelPlacement='outside'
                  placeholder='Nombre del proveedor'
                  variant='bordered'
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                ></Input>
                <Select
                  label='Tipo de proveedor'
                  labelPlacement='outside'
                  placeholder='Selecciona un tipo'
                  variant='bordered'
                  name='supplierType'
                  onChange={handleChange}
                  size='sm'
                  className='text-c-title'
                >
                  <SelectItem key={2}>Productos</SelectItem>
                </Select>
                <Select
                  label='Condicion de venta'
                  labelPlacement='outside'
                  placeholder='Selecciona una condicion'
                  variant='bordered'
                  name='saleCondition'
                  onChange={handleChange}
                  size='sm'
                  className='text-c-title'
                >
                  <SelectItem key={2}>Contado</SelectItem>
                </Select>
              </div>
              <div className='rowmodaladdproduct justify-start items-start flex gap-3'>
                <Textarea
                  label='Description'
                  variant='bordered'
                  name='description'
                  onChange={handleChange}
                  labelPlacement='outside'
                  placeholder='Enter your description'
                ></Textarea>
              </div>

              <div className='rowmodaladdproduct  justify-start items-start flex gap-3'>
                <Input
                  label='Numero de celular'
                  size='sm'
                  name='phone'
                  labelPlacement='outside'
                  placeholder='Numero del proveedor'
                  variant='bordered'
                  onChange={handleChange}
                ></Input>
                <Input
                  label='Email'
                  size='sm'
                  name='email'
                  labelPlacement='outside'
                  placeholder='Email del proveedor'
                  variant='bordered'
                  onChange={handleChange}
                ></Input>
                <Input
                  label='Website'
                  size='sm'
                  name='website'
                  labelPlacement='outside'
                  placeholder='www.url.com'
                  variant='bordered'
                  onChange={handleChange}
                ></Input>
              </div>
              <div className='rowmodaladdproduct select flex items-start justify-start gap-3'>
                <Input
                  label='DNI/CUIL'
                  size='sm'
                  name='dni'
                  labelPlacement='outside'
                  placeholder='Ingresa el dni'
                  variant='bordered'
                  onChange={handleChange}
                ></Input>
                <Input
                  label='Direccion del proveedor'
                  size='sm'
                  name='address'
                  labelPlacement='outside'
                  placeholder='Ingresa la direccion'
                  variant='bordered'
                  onChange={handleChange}
                ></Input>
              </div>
              <div className='rowmodaladdproduct select flex items-start justify-start gap-3'></div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' variant='light' onPress={onClose}>
              Cerrar
            </Button>
            <Button color='primary' onPress={handleSubmit}>
              Agregar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}