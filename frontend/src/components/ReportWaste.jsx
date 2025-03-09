import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCloudUploadAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import L from "leaflet";

function ReportWaste({ openSuccessModal }) {
    const [imagePreview, setImagePreview] = useState("");
    const [location, setLocation] = useState("");
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const userMarkerRef = useRef(null);
    const popupTimeoutRef = useRef(null);

    const wasteIcon = L.divIcon({
        className: "waste-marker",
        html: '<div style="color: #ff0000; font-size: 35px;"><i class="fas fa-map-marker-alt"></i></div>',
        iconSize: [35, 55],
        iconAnchor: [17, 55],
    });

    const userIcon = L.divIcon({
        className: "user-marker",
        html: '<div style="color: blue;"><i class="fas fa-location-arrow"></i></div>',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            wasteType: e.target.wasteType.value,
            location: e.target.location.value,
            description: e.target.description.value,
            wasteImage: e.target.wasteImage.files[0] ? e.target.wasteImage.files[0].name : "",
        };
        console.log("Waste report submitted with data:", formData);
        openSuccessModal();
        setImagePreview("");
        setLocation("");
        e.target.reset();
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleGetLocation = () => {
        console.log("Starting geolocation request...");
        if (navigator.geolocation) {
            console.log("Geolocation API is supported.");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    console.log("Current location retrieved successfully:", { lat, lng });
                    setLocation(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
                    if (mapInstanceRef.current) {
                        console.log("Centering map on current location:", { lat, lng });
                        mapInstanceRef.current.setView([lat, lng], 13);
                        if (userMarkerRef.current) {
                            mapInstanceRef.current.removeLayer(userMarkerRef.current);
                        }
                        userMarkerRef.current = L.marker([lat, lng], { icon: userIcon })
                            .addTo(mapInstanceRef.current)
                            .bindPopup("Your Current Location", { className: 'custom-popup' })
                            .openPopup();
                    }
                },
                (error) => {
                    console.error("Geolocation failed:", {
                        code: error.code,
                        message: error.message,
                        details: "See https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API#errors",
                    });
                    let errorMessage = "Could not detect your location: ";
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "Please grant permission to access your location.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage += "Location unavailable. Deploy to https to fix.";
                            break;
                        case error.TIMEOUT:
                            errorMessage += "Request timed out. Check your network.";
                            break;
                        default:
                            errorMessage += "Unknown error occurred.";
                            break;
                    }
                    const mockLat = 21.1702; // Surat
                    const mockLng = 72.8311;
                    setLocation(`${mockLat.toFixed(6)}, ${mockLng.toFixed(6)}`);
                    console.log("Falling back to mock location (Surat):", { lat: mockLat, lng: mockLng });
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.setView([mockLat, mockLng], 13);
                        if (userMarkerRef.current) {
                            mapInstanceRef.current.removeLayer(userMarkerRef.current);
                        }
                        userMarkerRef.current = L.marker([mockLat, mockLng], { icon: userIcon })
                            .addTo(mapInstanceRef.current)
                            .bindPopup("Mock Location (Surat)", { className: 'custom-popup' })
                            .openPopup();
                    }
                    alert(errorMessage); // Updated message here
                },
                { timeout: 10000, enableHighAccuracy: true, maximumAge: 0 }
            );
        } else {
            console.error("Geolocation API not supported.");
            const mockLat = 21.1702; // Surat
            const mockLng = 72.8311;
            setLocation(`${mockLat.toFixed(6)}, ${mockLng.toFixed(6)}`);
            if (mapInstanceRef.current) {
                mapInstanceRef.current.setView([mockLat, mockLng], 13);
                if (userMarkerRef.current) {
                    mapInstanceRef.current.removeLayer(userMarkerRef.current);
                }
                userMarkerRef.current = L.marker([mockLat, mockLng], { icon: userIcon })
                    .addTo(mapInstanceRef.current)
                    .bindPopup("Mock Location (Surat)", { className: 'custom-popup' })
                    .openPopup();
            }
            alert("Geolocation not supported. Using Surat as a mock.");
        }
    };

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        mapInstanceRef.current = L.map(mapRef.current).setView([27.7172, 85.3240], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        const wasteReports = [
            { lat: 27.72, lng: 85.32, message: "Plastic waste reported here" },
            { lat: 27.71, lng: 85.33, message: "Electronic waste reported here" },
            { lat: 27.73, lng: 85.31, message: "Organic waste reported here" },
            { lat: 27.70, lng: 85.34, message: "Paper waste reported here" },
            { lat: 27.715, lng: 85.325, message: "Metal waste reported here" },
            { lat: 27.725, lng: 85.335, message: "Glass waste reported here" },
        ];

        wasteReports.forEach((report) => {
            const marker = L.marker([report.lat, report.lng], { icon: wasteIcon })
                .addTo(mapInstanceRef.current)
                .bindPopup(report.message, { 
                    autoClose: false, 
                    closeOnClick: false, 
                    offset: [0, -40], 
                    className: 'custom-popup' 
                });

            marker.on("mouseover", () => {
                clearTimeout(popupTimeoutRef.current);
                marker.openPopup();
            });

            marker.on("mouseout", () => {
                popupTimeoutRef.current = setTimeout(() => {
                    marker.closePopup();
                }, 300);
            });

            marker.on("touchstart", (e) => {
                e.preventDefault();
                clearTimeout(popupTimeoutRef.current);
                marker.openPopup();
            });

            marker.on("touchend", () => {
                popupTimeoutRef.current = setTimeout(() => {
                    marker.closePopup();
                }, 2000);
            });

            marker.on("touchmove", () => {
                clearTimeout(popupTimeoutRef.current);
            });
        });

        const GPSControl = L.Control.extend({
            onAdd: function () {
                const div = L.DomUtil.create("div", "gps-control");
                div.innerHTML = '<button title="Locate me"><i class="fas fa-location-arrow"></i></button>';
                div.onclick = (e) => {
                    e.preventDefault();
                    handleGetLocation();
                };
                return div;
            },
        });

        const gpsControl = new GPSControl({ position: "bottomright" });
        gpsControl.addTo(mapInstanceRef.current);

        mapInstanceRef.current.on("click", (e) => {
            if (!e.originalEvent.target.closest(".leaflet-marker-icon") && !e.originalEvent.target.closest(".gps-control")) {
                handleGetLocation();
            }
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.off("click");
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <section id="report" className="report-waste py-32 px-5 bg-gray-800">
            <h2 className="section-title text-4xl text-white font-semibold mb-8">Report Waste</h2>
            <div className="report-container grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
                <div className="report-form bg-gray-700 p-12 rounded-xl shadow-xl">
                    <form id="wasteReportForm" onSubmit={handleSubmit}>
                        <div className="form-group mb-8">
                            <label htmlFor="wasteType" className="text-lg font-medium text-gray-300 mb-2">Waste Type</label>
                            <select id="wasteType" className="w-full p-4 border-2 border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500" required>
                                <option value="" disabled selected>Select waste type</option>
                                <option value="plastic">Plastic</option>
                                <option value="electronic">Electronic</option>
                                <option value="organic">Organic</option>
                                <option value="paper">Paper</option>
                                <option value="metal">Metal</option>
                                <option value="glass">Glass</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group mb-8">
                            <label htmlFor="location" className="text-lg font-medium text-gray-300 mb-2">Location</label>
                            <div className="location-input-wrapper relative flex items-center">
                                <input
                                    type="text"
                                    id="location"
                                    className="flex-1 p-4 pr-12 bg-gray-900 text-white border-2 border-gray-600 rounded-lg"
                                    placeholder="Enter address"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="location-btn absolute right-4 text-green-500 hover:text-green-700 text-xl"
                                    onClick={handleGetLocation}
                                    title="Get current location"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </button>
                            </div>
                        </div>
                        <div className="form-group mb-8">
                            <label htmlFor="description" className="text-lg font-medium text-gray-300 mb-2">Description</label>
                            <textarea
                                id="description"
                                className="w-full p-4 bg-gray-900 text-white border-2 border-gray-600 rounded-lg resize-y"
                                placeholder="Please describe the waste and situation"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="form-group mb-8">
                            <label htmlFor="wasteImage" className="text-lg font-medium text-gray-300 mb-2">Upload Image</label>
                            <div className="file-upload border-3 border-dashed border-gray-600 rounded-lg bg-gray-800">
                                <input
                                    type="file"
                                    id="wasteImage"
                                    className="file-input w-full p-4 text-gray-300 border-2 border-gray-600 rounded-lg"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                            {imagePreview && (
                                <div className="image-preview mt-4">
                                    <img src={imagePreview} alt="Image Preview" className="w-40 h-40 object-cover rounded-lg shadow-lg" />
                                </div>
                            )}
                        </div>
                        <button type="submit" className="submit-btn w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">Submit Report</button>
                    </form>
                </div>
                <div className="map-container bg-gray-700 rounded-xl shadow-xl">
                    <div id="map" ref={mapRef} className="h-full w-full rounded-lg" />
                </div>
            </div>
        </section>
    );
}

export default ReportWaste;
