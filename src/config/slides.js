import { validateIdNo } from '../utils/validate'
export default [
  {
    label: 'รหัสประจำตัวประชาชน',
    id: ['insured_IdNo'],
    component: ['NumberInput'],
    condition: true,
    props: {
      0: {
        maxLength: 13,
        validateFn: validateIdNo
      }
    }
  },
  {
    label: 'ชื่อผู้เอาประกัน',
    id: ['insured_firstName', 'insured_lastName'],
    component: ['TextInput', 'TextInput'],
    condition: true,
    props: {
      0: {
        placeholder: 'ชื่อ'
      },
      1: {
        placeholder: 'นามสกุล'
      }
    }
  },
  {
    label: 'เป็นผู้ใหญ่ใช่หรือไม่',
    id: ['isAdult'],
    component: ['Option'],
    condition: true,
    props: {
      0: {
        list: [
          {
            label: 'ใช่',
            value: 'Y'
          },
          {
            label: 'ไม่',
            value: 'N'
          }
        ]
      }
    }
  },
  {
    label: 'ชื่อผู้ชำระเบี้ย',
    id: ['payer_firstName', 'payer_lastName'],
    component: ['TextInput', 'TextInput'],
    condition: 'isJuvenile',
    props: {
      0: {
        placeholder: 'ชื่อ'
      },
      1: {
        placeholder: 'นามสกุล'
      }
    }
  },
]