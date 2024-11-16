// src/components/DatePicker.jsx
import { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import i18next from 'i18next';

// Configura le lingue per Pikaday
const i18nConfig = {
  it: {
    previousMonth: 'Mese precedente',
    nextMonth: 'Mese successivo',
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
  },
  en: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
};

// Funzione per inizializzare Pikaday con la lingua corrente
function initializeDatePicker(elementId, onSelect) {
  const lang = i18next.language;
  new Pikaday({
    field: document.getElementById(elementId),
    onSelect: onSelect,
    i18n: i18nConfig[lang] || i18nConfig['it'], // Default a 'it' se la lingua non è configurata
  });
}

function DatePicker({ onSelect }) {
  const datepickerRef = useRef(null);

  useEffect(() => {
    if (datepickerRef.current) {
      // Assicurati che l'elemento abbia un id
      if (!datepickerRef.current.id) {
        datepickerRef.current.id = 'datepicker-' + Math.random().toString(36).substr(2, 9);
      }
      initializeDatePicker(datepickerRef.current.id, onSelect);
    }

    return () => {
      // Non è necessario distruggere Pikaday qui, poiché viene gestito da initializeDatePicker
    };
  }, [onSelect, i18next.language]);

  return <input type="text" ref={datepickerRef} className="datepicker-input" />;
}

export default DatePicker;